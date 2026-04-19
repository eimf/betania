import { globalCss, keyframes } from "@washingtonpost/wpds-ui-kit";

export const betaniaColors = {
  mintLight: "#E8F5EE",
  mint: "#5DB88C",
  mintDark: "#3D8A65",
  black: "#111111",
  charcoal: "#1E1E1E",
  /** Editorial / ref palette (hero, nav over imagery) */
  nightSky: "#1A1D2B",
  warmCream: "#FBF7F0",
  paper: "#FFFCF7",
  goldenAmber: "#C8922A",
  darkRed: "#A32328",
  deepRed: "#7B1A1E",
  gold: "#C8922A",
  deepGold: "#9A6F1E",
  cream: "#FAF9F6",
  warmWhite: "#FFFFFF",
  softGray: "#F2F0EC",
  borderGray: "#E2E0DB",
  textMuted: "#6B6B6B",
};

export const betaniaGlobalStyles = globalCss({
  "@import":
    "url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap')",
  "*, *::before, *::after": {
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  body: {
    margin: 0,
    padding: 0,
    backgroundColor: betaniaColors.warmCream,
    color: betaniaColors.charcoal,
    fontFamily: "'Inter', sans-serif",
    overflowX: "hidden",
  },
  "::selection": {
    backgroundColor: betaniaColors.goldenAmber,
    color: "#fff",
  },
  "@media (prefers-reduced-motion: reduce)": {
    "*, *::before, *::after": {
      animationDuration: "0.01ms !important",
      animationIterationCount: "1 !important",
      transitionDuration: "0.01ms !important",
      scrollBehavior: "auto !important",
    },
  },
});

export const fadeInUp = keyframes({
  "0%": { opacity: 0, transform: "translateY(30px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

export const fadeIn = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

export const shimmer = keyframes({
  "0%": { backgroundPosition: "-200% 0" },
  "100%": { backgroundPosition: "200% 0" },
});

export const pulseGlow = keyframes({
  "0%, 100%": { opacity: 0.4 },
  "50%": { opacity: 0.8 },
});
