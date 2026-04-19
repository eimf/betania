import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";
import { anchors, externalUrls, homeLinkTo } from "../data/links";

const Nav = styled("nav", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 300,
  transition: "background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease",
  padding: "0 $200",
  "@sm": { padding: "0 $100" },
});

const NavInner = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: "1280px",
  margin: "0 auto",
  height: "72px",
  "@sm": { height: "60px" },
});

const Logo = styled(Link, {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  letterSpacing: "-0.02em",
  outline: "none",
  flexShrink: 0,
  "&:focus-visible": {
    boxShadow: `0 0 0 3px rgba(200,146,42,0.45)`,
    borderRadius: "4px",
  },
});

const NavLinks = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$075",
  flexWrap: "wrap",
  justifyContent: "flex-end",
  "@sm": { display: "none" },
  "@md": { display: "none" },
});

const NavLink = styled(Link, {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "inherit",
  textDecoration: "none",
  opacity: 0.9,
  transition: "opacity 0.2s ease",
  outline: "none",
  whiteSpace: "nowrap",
  "&:hover": { opacity: 1 },
  "&:focus-visible": {
    opacity: 1,
    boxShadow: `0 0 0 3px rgba(200,146,42,0.4)`,
    borderRadius: "4px",
  },
});

const ExternalNavLink = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "inherit",
  textDecoration: "none",
  opacity: 0.9,
  transition: "opacity 0.2s ease",
  outline: "none",
  whiteSpace: "nowrap",
  "&:hover": { opacity: 1 },
  "&:focus-visible": {
    opacity: 1,
    boxShadow: `0 0 0 3px rgba(200,146,42,0.4)`,
    borderRadius: "4px",
  },
});

const CtaButton = styled(Link, {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  padding: "$050 $100",
  borderRadius: "9999px",
  textDecoration: "none",
  transition: "all 0.2s ease",
  cursor: "pointer",
  outline: "none",
  flexShrink: 0,
  "&:focus-visible": {
    boxShadow: `0 0 0 3px rgba(200,146,42,0.45)`,
  },
});

const LangToggle = styled("button", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  padding: "$025 $075",
  borderRadius: "9999px",
  borderWidth: "1px",
  borderStyle: "solid",
  backgroundColor: "transparent",
  color: "inherit",
  cursor: "pointer",
  transition: "all 0.2s ease",
  outline: "none",
  flexShrink: 0,
  "&:hover": {
    backgroundColor: "rgba(200,146,42,0.12)",
    borderColor: betaniaColors.goldenAmber,
  },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px rgba(200,146,42,0.4)`,
  },
});

const MobileMenuButton = styled("button", {
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "$050",
  color: "inherit",
  outline: "none",
  "@sm": { display: "flex" },
  "@md": { display: "flex" },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px rgba(200,146,42,0.4)`,
    borderRadius: "4px",
  },
});

const MobileOverlay = styled("div", {
  position: "fixed",
  inset: 0,
  zIndex: 299,
  backgroundColor: betaniaColors.nightSky,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$100",
  padding: "$200",
});

const MobileLink = styled(Link, {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.85rem",
  fontWeight: 600,
  color: betaniaColors.paper,
  textDecoration: "none",
  opacity: 0.94,
  outline: "none",
  textAlign: "center",
  "&:hover": { opacity: 1 },
  "&:focus-visible": {
    opacity: 1,
    textDecoration: "underline",
    textUnderlineOffset: "6px",
  },
});

const MobileExternalLink = styled("a", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.85rem",
  fontWeight: 600,
  color: betaniaColors.paper,
  textDecoration: "none",
  opacity: 0.94,
  outline: "none",
  textAlign: "center",
  "&:hover": { opacity: 1 },
  "&:focus-visible": {
    opacity: 1,
    textDecoration: "underline",
    textUnderlineOffset: "6px",
  },
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { locale, setLocale, t } = useI18n();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const internalNav = [
    { label: t.nav.horarios, to: homeLinkTo(anchors.horarios) },
    { label: t.nav.queEsperar, to: homeLinkTo(anchors.queEsperar) },
    { label: t.nav.historia, to: homeLinkTo(anchors.historia) },
    { label: t.nav.ministerios, to: homeLinkTo(anchors.ministerios) },
    { label: t.nav.conectar, to: homeLinkTo(anchors.conectar) },
  ];

  const externalNav = [
    { label: t.nav.live, href: externalUrls.liveWatch },
  ] as const;

  const bgColor = scrolled
    ? "rgba(251,247,240,0.96)"
    : "rgba(251,247,240,0)";
  const textColor = scrolled ? betaniaColors.charcoal : betaniaColors.paper;
  const shadow = scrolled ? "0 1px 8px rgba(0,0,0,0.08)" : "none";

  const toggleLang = () => setLocale(locale === "es" ? "en" : "es");

  const langBorder = scrolled
    ? betaniaColors.borderGray
    : "rgba(255,252,247,0.32)";

  return (
    <>
      <Nav
        style={{
          backgroundColor: bgColor,
          boxShadow: shadow,
          color: textColor,
          backdropFilter: scrolled ? "blur(12px)" : "none",
        }}
      >
        <NavInner>
          <Logo to={homeLinkTo(anchors.hero)}>{t.nav.brand}</Logo>
          <NavLinks>
            {internalNav.map((item) => (
              <NavLink key={item.to.hash} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            {externalNav.map((item) => (
              <ExternalNavLink
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.label}
              </ExternalNavLink>
            ))}
            <LangToggle
              type="button"
              onClick={toggleLang}
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
              style={{ borderColor: langBorder }}
            >
              {locale === "es" ? "EN" : "ES"}
            </LangToggle>
            <CtaButton
              to={homeLinkTo("#contacto")}
              style={{
                backgroundColor: scrolled
                  ? betaniaColors.goldenAmber
                  : "rgba(255,255,255,0.12)",
                color: scrolled ? "#fff" : betaniaColors.paper,
                border: scrolled
                  ? "none"
                  : "1px solid rgba(255,252,247,0.32)",
              }}
            >
              {t.nav.cta}
            </CtaButton>
          </NavLinks>
          <MobileMenuButton
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
              {mobileOpen ? (
                <path
                  d="M6 6L18 18M6 18L18 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              ) : (
                <>
                  <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 17H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </>
              )}
            </svg>
          </MobileMenuButton>
        </NavInner>
      </Nav>

      {mobileOpen && (
        <MobileOverlay
          id="mobile-nav-panel"
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label={t.nav.closeMenu}
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              background: "none",
              border: "none",
              color: betaniaColors.paper,
              cursor: "pointer",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>

          {internalNav.map((item, i) => (
            <motion.div
              key={item.to.hash}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <MobileLink to={item.to} onClick={() => setMobileOpen(false)}>
                {item.label}
              </MobileLink>
            </motion.div>
          ))}

          {externalNav.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: (internalNav.length + i) * 0.05 }}
            >
              <MobileExternalLink
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </MobileExternalLink>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: (internalNav.length + externalNav.length) * 0.05,
            }}
            style={{ marginTop: "$075" }}
          >
            <LangToggle
              type="button"
              onClick={toggleLang}
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a español"}
              style={{
                color: betaniaColors.paper,
                borderColor: "rgba(255,252,247,0.35)",
              }}
            >
              {locale === "es" ? "EN" : "ES"}
            </LangToggle>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: (internalNav.length + externalNav.length + 1) * 0.05,
            }}
          >
            <CtaButton
              to={homeLinkTo("#contacto")}
              onClick={() => setMobileOpen(false)}
              style={{
                backgroundColor: betaniaColors.goldenAmber,
                color: "#fff",
                fontSize: "1rem",
                padding: "0.75rem 2rem",
                marginTop: "0.5rem",
                border: "none",
              }}
            >
              {t.nav.cta}
            </CtaButton>
          </motion.div>
        </MobileOverlay>
      )}
    </>
  );
}
