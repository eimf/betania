import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";

const Nav = styled("nav", {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 300,
  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
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

const Logo = styled("a", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: "inherit",
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  gap: "$050",
  letterSpacing: "-0.02em",
});

const NavLinks = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$125",
  "@sm": { display: "none" },
  "@md": { display: "none" },
});

const NavLink = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "inherit",
  textDecoration: "none",
  opacity: 0.85,
  transition: "opacity 0.2s ease",
  "&:hover": { opacity: 1 },
});

const CtaButton = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  padding: "$050 $100",
  borderRadius: "9999px",
  textDecoration: "none",
  transition: "all 0.2s ease",
  cursor: "pointer",
});

const LangToggle = styled("button", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.05em",
  padding: "$025 $075",
  borderRadius: "9999px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: "transparent",
  color: "inherit",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(93,184,140,0.1)",
    borderColor: betaniaColors.mint,
  },
});

const MobileMenuButton = styled("button", {
  display: "none",
  background: "none",
  border: "none",
  cursor: "pointer",
  padding: "$050",
  color: "inherit",
  "@sm": { display: "flex" },
  "@md": { display: "flex" },
});

const MobileOverlay = styled("div", {
  position: "fixed",
  inset: 0,
  zIndex: 299,
  backgroundColor: betaniaColors.black,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "$200",
});

const MobileLink = styled("a", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "2rem",
  fontWeight: 600,
  color: "#fff",
  textDecoration: "none",
  opacity: 0.9,
  "&:hover": { opacity: 1 },
});

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const { locale, setLocale, t } = useI18n();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const navItems = [
    { label: t.nav.horarios, href: "#horarios" },
    { label: t.nav.queEsperar, href: "#que-esperar" },
    { label: t.nav.conserjeria, href: "#conserjeria" },
    { label: t.nav.historia, href: "#historia" },
    { label: t.nav.ministerios, href: "#ministerios" },
    { label: t.nav.bautismos, href: "#bautismos" },
    { label: t.nav.conectar, href: "#conectar" },
    { label: t.nav.donaciones, href: "#donaciones" },
  ];

  const bgColor = scrolled
    ? "rgba(255,255,255,0.95)"
    : "rgba(255,255,255,0)";
  const textColor = betaniaColors.black;
  const shadow = scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none";

  const toggleLang = () => setLocale(locale === "es" ? "en" : "es");

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
          <Logo href="#">{t.nav.brand}</Logo>
          <NavLinks>
            {navItems.map((item) => (
              <NavLink key={item.href} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <CtaButton
              href="#contacto"
              style={{
                backgroundColor: betaniaColors.darkRed,
                color: "#fff",
                border: "none",
              }}
            >
              {t.nav.cta}
            </CtaButton>
            <LangToggle
              onClick={toggleLang}
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espanol"}
            >
              {locale === "es" ? "EN" : "ES"}
            </LangToggle>
          </NavLinks>
          <MobileMenuButton
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? t.nav.closeMenu : t.nav.openMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
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
          as={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label={t.nav.closeMenu}
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              background: "none",
              border: "none",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6L18 18M6 18L18 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          {navItems.map((item, i) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <MobileLink
                href={item.href}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </MobileLink>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: navItems.length * 0.06 }}
          >
            <CtaButton
              href="#contacto"
              onClick={() => setMobileOpen(false)}
              style={{
                backgroundColor: betaniaColors.darkRed,
                color: "#fff",
                fontSize: "1rem",
                padding: "0.75rem 2rem",
                marginTop: "0.5rem",
              }}
            >
              {t.nav.cta}
            </CtaButton>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (navItems.length + 1) * 0.06 }}
          >
            <LangToggle
              onClick={toggleLang}
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espanol"}
              style={{ color: "#fff", borderColor: "rgba(255,255,255,0.3)" }}
            >
              {locale === "es" ? "EN" : "ES"}
            </LangToggle>
          </motion.div>
        </MobileOverlay>
      )}
    </>
  );
}
