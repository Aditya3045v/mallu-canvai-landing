export default async function handler(req, res) {
  // Add CORS headers to allow local testing if needed
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    // Generate the trial key via the Eklas License API
    const response = await fetch('https://io.eklas.dev/api/v1/license/generate', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer eklas_live_BTHokcd7HGBQstaM4VTL0XHEgaDw37NH`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        plan: 'Trial',
        email: email,
        durationValue: 30,
        durationUnit: 'minute',
        maxActivations: 1
      })
    });

    const text = await response.text();
    let data = {};
    
    try {
      data = text ? JSON.parse(text) : {};
    } catch (e) {
      console.error("Non-JSON response from Eklas API:", text);
      return res.status(500).json({ error: 'Upstream API returned invalid response.' });
    }

    if (!response.ok) {
      return res.status(response.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    console.error('Error generating license:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
