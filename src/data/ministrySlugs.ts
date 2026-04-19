/** URL slugs for `/ministerios/:slug` — order matches `t.ministries.items`. */
export const MINISTRY_SLUGS = [
  "ninos",
  "jovenes",
  "mujeres",
  "hombres",
  "discipulado",
  "oracion",
  "servicio",
] as const;

export type MinistrySlug = (typeof MINISTRY_SLUGS)[number];

export function isMinistrySlug(value: string): value is MinistrySlug {
  return (MINISTRY_SLUGS as readonly string[]).includes(value);
}
