import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { useScroll, useMotionValueEvent } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import { betaniaColors } from "../../theme/betaniaTheme";
import {
  Nav,
  NavInner,
  Brand,
  ActiveDot,
  NavActions,
  MenuButton,
  MenuIcon,
  LangToggle,
} from "../../styles/navStyles";
import { navModel } from "./navModel";
import { useActiveSection } from "./useActiveSection";
import PathNavOverlay from "./PathNavOverlay";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { locale, setLocale, t } = useI18n();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 60);
  });

  const sectionIds = useMemo(() => navModel.map((w) => w.id), []);
  const activeId = useActiveSection(sectionIds);
  const activeWaypoint = navModel.find((w) => w.id === activeId);

  const toggleLang = () => setLocale(locale === "es" ? "en" : "es");

  return (
    <>
      <Nav
        style={{
          backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0)",
          boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          color: betaniaColors.black,
        }}
      >
        <NavInner>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Brand href="#hero">{t.nav.brand}</Brand>
            {activeWaypoint && activeWaypoint.id !== "hero" && (
              <ActiveDot aria-hidden="true">
                {t.pathNav.waypoints[activeWaypoint.labelKey].label}
              </ActiveDot>
            )}
          </div>

          <NavActions>
            <MenuButton
              type="button"
              aria-haspopup="dialog"
              aria-expanded={open}
              aria-controls="path-nav-overlay"
              onClick={() => setOpen(true)}
            >
              <MenuIcon aria-hidden="true">
                <span />
                <span />
                <span />
              </MenuIcon>
              {t.pathNav.menu}
            </MenuButton>
            <LangToggle
              onClick={toggleLang}
              aria-label={locale === "es" ? "Switch to English" : "Cambiar a Espanol"}
            >
              {locale === "es" ? "EN" : "ES"}
            </LangToggle>
          </NavActions>
        </NavInner>
      </Nav>

      <AnimatePresence>
        {open && (
          <PathNavOverlay
            open={open}
            onClose={() => setOpen(false)}
            activeSectionId={activeId}
          />
        )}
      </AnimatePresence>
    </>
  );
}
