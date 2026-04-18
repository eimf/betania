import { styled, keyframes } from "@washingtonpost/wpds-ui-kit";
import { betaniaColors } from "../theme/betaniaTheme";

export const lanternPulse = keyframes({
  "0%, 100%": { opacity: 0.55, transform: "scale(1)" },
  "50%": { opacity: 0.95, transform: "scale(1.08)" },
});

export const Nav = styled("nav", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 300,
  transition: "background-color 0.3s ease, box-shadow 0.3s ease, backdrop-filter 0.3s ease",
  padding: "0 $200",
  "@sm": { padding: "0 $100" },
});

export const NavInner = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1280px",
  margin: "0 auto",
  height: "72px",
  "@sm": { height: "60px" },
});

export const Brand = styled("a", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "inherit",
  textDecoration: "none",
  letterSpacing: "-0.02em",
  display: "flex",
  alignItems: "center",
  gap: "$050",
});

export const ActiveDot = styled("span", {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  opacity: 0.75,
  marginLeft: "1rem",
  "@sm": { display: "none" },
  "&::before": {
    content: "''",
    width: "6px",
    height: "6px",
    borderRadius: "50%",
    backgroundColor: betaniaColors.mint,
    boxShadow: `0 0 8px ${betaniaColors.mint}`,
  },
});

export const NavActions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$100",
});

export const MenuButton = styled("button", {
  display: "inline-flex",
  alignItems: "center",
  gap: "0.6rem",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  padding: "0.5rem 1rem",
  borderRadius: "9999px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: "transparent",
  color: "inherit",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: betaniaColors.charcoal,
    color: betaniaColors.cream,
    borderColor: betaniaColors.charcoal,
  },
  "&:focus-visible": {
    outline: `2px solid ${betaniaColors.gold}`,
    outlineOffset: "2px",
  },
});

export const MenuIcon = styled("span", {
  display: "inline-flex",
  flexDirection: "column",
  gap: "3px",
  "& span": {
    width: "18px",
    height: "1.5px",
    backgroundColor: "currentColor",
    display: "block",
  },
});

export const LangToggle = styled("button", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  padding: "0.35rem 0.8rem",
  borderRadius: "9999px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: "transparent",
  color: "inherit",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: betaniaColors.mint,
    color: betaniaColors.mintDark,
  },
  "&:focus-visible": {
    outline: `2px solid ${betaniaColors.gold}`,
    outlineOffset: "2px",
  },
});

export const OverlayRoot = styled("div", {
  position: "fixed",
  inset: 0,
  zIndex: 400,
  display: "flex",
  color: betaniaColors.cream,
  backgroundImage: `
    radial-gradient(ellipse at 30% 20%, rgba(200,146,42,0.18), transparent 55%),
    radial-gradient(ellipse at 80% 80%, rgba(61,138,101,0.18), transparent 60%),
    linear-gradient(155deg, #0E1512 0%, #152720 45%, #0B1418 100%)
  `,
  overflow: "hidden",
});

export const GrainLayer = styled("div", {
  position: "absolute",
  inset: 0,
  pointerEvents: "none",
  opacity: 0.08,
  mixBlendMode: "overlay",
  backgroundImage:
    "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.6'/></svg>\")",
  zIndex: 2,
});

export const PathStage = styled("div", {
  position: "relative",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$200",
  zIndex: 3,
  "@sm": { padding: "$100" },
});

export const PanelAside = styled("aside", {
  position: "relative",
  width: "380px",
  padding: "$250",
  borderLeft: "1px solid rgba(255,255,255,0.08)",
  backgroundColor: "rgba(8,14,12,0.55)",
  backdropFilter: "blur(8px)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "$150",
  zIndex: 3,
  "@md": { display: "none" },
  "@sm": { display: "none" },
});

export const PanelBottomSheet = styled("aside", {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,
  padding: "$200 $150",
  paddingBottom: "calc($200 + env(safe-area-inset-bottom))",
  backgroundColor: "rgba(8,14,12,0.8)",
  backdropFilter: "blur(10px)",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  display: "none",
  flexDirection: "column",
  gap: "$100",
  zIndex: 3,
  "@md": { display: "flex" },
  "@sm": { display: "flex" },
});

export const PanelTitle = styled("h2", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 600,
  fontSize: "2.25rem",
  margin: 0,
  lineHeight: 1.1,
  letterSpacing: "-0.01em",
  color: betaniaColors.cream,
  "@sm": { fontSize: "1.75rem" },
});

export const PanelMicrocopy = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.95rem",
  lineHeight: 1.55,
  color: "rgba(250,249,246,0.78)",
  margin: 0,
});

export const PanelCta = styled("button", {
  alignSelf: "flex-start",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.85rem",
  fontWeight: 600,
  letterSpacing: "0.04em",
  padding: "0.75rem 1.6rem",
  borderRadius: "9999px",
  border: "none",
  backgroundColor: betaniaColors.darkRed,
  color: "#fff",
  cursor: "pointer",
  transition: "transform 0.2s ease, background-color 0.2s ease",
  "&:hover": { backgroundColor: betaniaColors.deepRed, transform: "translateY(-1px)" },
  "&:focus-visible": {
    outline: `2px solid ${betaniaColors.gold}`,
    outlineOffset: "2px",
  },
});

export const TopBar = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 5,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "1.25rem 1.5rem",
  color: betaniaColors.cream,
});

export const DialogTitle = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.1rem",
  fontWeight: 600,
  letterSpacing: "0.02em",
  margin: 0,
  opacity: 0.9,
});

export const CloseButton = styled("button", {
  width: "44px",
  height: "44px",
  borderRadius: "50%",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.15)",
  color: "inherit",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background-color 0.2s ease, transform 0.2s ease",
  "&:hover": { backgroundColor: "rgba(255,255,255,0.12)" },
  "&:focus-visible": {
    outline: `2px solid ${betaniaColors.gold}`,
    outlineOffset: "2px",
  },
});

export const WaypointButton = styled("button", {
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "52px",
  height: "52px",
  borderRadius: "50%",
  border: "1px solid rgba(250,249,246,0.25)",
  backgroundColor: "rgba(250,249,246,0.06)",
  color: betaniaColors.cream,
  cursor: "pointer",
  transform: "translate(-50%,-50%)",
  transition: "background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
  "&:hover": {
    backgroundColor: "rgba(200,146,42,0.2)",
    borderColor: betaniaColors.gold,
  },
  "&:focus-visible": {
    outline: `2px solid ${betaniaColors.gold}`,
    outlineOffset: "3px",
  },
  variants: {
    active: {
      true: {
        backgroundColor: "rgba(200,146,42,0.25)",
        borderColor: betaniaColors.gold,
        boxShadow: `0 0 0 6px rgba(200,146,42,0.15), 0 0 24px rgba(200,146,42,0.5)`,
        animation: `${lanternPulse} 2.6s ease-in-out infinite`,
      },
    },
  },
});

export const WaypointLabel = styled("span", {
  position: "absolute",
  top: "calc(100% + 10px)",
  left: "50%",
  transform: "translateX(-50%)",
  whiteSpace: "nowrap",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.72rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  opacity: 0.75,
  pointerEvents: "none",
  color: betaniaColors.cream,
  variants: {
    active: { true: { color: betaniaColors.gold, opacity: 1 } },
  },
  "@sm": { display: "none" },
});
