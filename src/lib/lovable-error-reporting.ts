/** Generic client-side error reporter (no vendor dependencies). */
export function reportError(
  error: unknown,
  context: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  console.error("[MalluAI Error]", error, context);
}
