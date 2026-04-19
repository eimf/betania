/** Use for `href` on `<a>` (footer, etc.) so hash links work from routes like `/ministerios/ninos`. */
export function homeHash(anchor: string): string {
  return anchor.startsWith("#") ? `/${anchor}` : `/#${anchor}`;
}

/** Use for React Router `<Link to={...}>` — string `"/#id"` often skips hash scroll on same route. */
export function homeLinkTo(anchor: string): { pathname: string; hash: string } {
  const hash = anchor.startsWith("#") ? anchor : `#${anchor}`;
  return { pathname: "/", hash };
}

/** In-page anchors (scroll targets). */
export const anchors = {
  hero: "#hero",
  nuevoAqui: "#nuevo-aqui",
  horarios: "#horarios",
  ubicacion: "#ubicacion",
  queEsperar: "#que-esperar",
  historia: "#historia",
  ministerios: "#ministerios",
  conectar: "#conectar",
} as const;

/** Página oficial de la iglesia en Facebook (todas las menciones “Facebook” enlazan aquí). */
const FACEBOOK_CHURCH_PAGE =
  "https://www.facebook.com/share/18jXXEyWz9/?mibextid=wwXIfr" as const;

/** External destinations (navbar, hero CTA, footer, etc.). */
export const externalUrls = {
  facebookPage: FACEBOOK_CHURCH_PAGE,
  /** Transmisión en vivo (Facebook). */
  liveWatch: FACEBOOK_CHURCH_PAGE,
} as const;

/** Hero imagery (from design reference). */
export const heroImages = {
  /** Full-bleed hero photograph */
  heroBg: "/hero-bg.webp",
  /** Optional secondary asset for future layouts */
  primarySrc: "/community.webp",
  subtleBgSrc: "/texture-warm.webp",
} as const;
