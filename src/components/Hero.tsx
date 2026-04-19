import type { MouseEvent } from "react";
import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion, useReducedMotion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";
import { anchors, externalUrls, heroImages, homeHash } from "../data/links";

const HeroWrapper = styled("section", {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: betaniaColors.nightSky,
  paddingTop: "88px",
  paddingBottom: "$200",
  "@sm": { paddingTop: "76px" },
});

const HeroBg = styled("div", {
  position: "absolute",
  inset: 0,
  backgroundImage: `url(${heroImages.heroBg})`,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
  "&::after": {
    content: "",
    position: "absolute",
    inset: 0,
    background: `linear-gradient(
      to bottom,
      rgba(26,29,43,0.55) 0%,
      rgba(26,29,43,0.4) 40%,
      rgba(26,29,43,0.72) 100%
    )`,
  },
});

const ParallaxLayer = styled("div", {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse at 50% 80%, rgba(200,146,42,0.15) 0%, transparent 60%)",
  pointerEvents: "none",
});

const Inner = styled("div", {
  position: "relative",
  zIndex: 2,
  width: "100%",
  maxWidth: "920px",
  margin: "0 auto",
  padding: "0 $100",
  textAlign: "center",
});

const MicroBadge = styled("div", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$050",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: betaniaColors.goldenAmber,
  marginBottom: "$100",
  padding: "$025 $075",
  borderRadius: "9999px",
  border: "1px solid rgba(200,146,42,0.3)",
  backgroundColor: "rgba(200,146,42,0.08)",
});

const Dot = styled("span", {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: betaniaColors.goldenAmber,
});

const Headline = styled("h1", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2.75rem, 7vw, 5.25rem)",
  lineHeight: 1.08,
  color: betaniaColors.paper,
  margin: "0 0 $125",
  letterSpacing: "-0.03em",
});

const Subheadline = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(1.0625rem, 2.3vw, 1.45rem)",
  lineHeight: 1.6,
  color: "rgba(255,252,247,0.78)",
  maxWidth: "36rem",
  margin: "0 auto $175",
  fontWeight: 450,
});

const CtaRow = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  gap: "$075",
  justifyContent: "center",
  alignItems: "center",
});

const btnBase = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(0.875rem, 1.6vw, 0.9375rem)",
  fontWeight: 600,
  padding: "$075 $125",
  borderRadius: "9999px",
  textDecoration: "none",
  transition: "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, border-color 0.2s ease",
  outline: "none",
  cursor: "pointer",
  border: "2px solid transparent",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  "&:focus-visible": {
    boxShadow: `0 0 0 3px rgba(26,29,43,0.85), 0 0 0 5px ${betaniaColors.goldenAmber}`,
  },
} as const;

const CtaPrimary = styled("a", {
  ...btnBase,
  backgroundColor: betaniaColors.goldenAmber,
  color: "#fff",
  borderColor: betaniaColors.goldenAmber,
  "&:hover": {
    backgroundColor: betaniaColors.deepGold,
    borderColor: betaniaColors.deepGold,
    transform: "translateY(-1px)",
  },
});

const CtaGhost = styled("a", {
  ...btnBase,
  backgroundColor: "transparent",
  color: betaniaColors.paper,
  borderColor: "rgba(255,252,247,0.28)",
  fontWeight: 500,
  "&:hover": {
    backgroundColor: "rgba(255,252,247,0.08)",
    borderColor: "rgba(255,252,247,0.45)",
    transform: "translateY(-1px)",
  },
});

const ScrollIndicator = styled("div", {
  position: "absolute",
  bottom: "$150",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "$050",
  color: "rgba(255,252,247,0.38)",
  fontSize: "0.6875rem",
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
});

const ScrollLine = styled("div", {
  width: "1px",
  height: "28px",
  background:
    "linear-gradient(to bottom, rgba(200,146,42,0.55), transparent)",
});

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const { t } = useI18n();

  const stagger = prefersReduced ? 0 : 0.14;
  const fadeOnly = prefersReduced;

  const fadeUp = fadeOnly
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.25 } } }
    : {
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
        },
      };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: prefersReduced ? 0 : 0.08,
      },
    },
  };

  const btnWrap = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: prefersReduced ? 0 : 0.1,
        delayChildren: prefersReduced ? 0 : 0.04,
      },
    },
  };

  return (
    <HeroWrapper id="hero">
      <HeroBg
        as={motion.div}
        initial={{ scale: prefersReduced ? 1 : 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: prefersReduced ? 0.01 : 8, ease: "easeOut" }}
      />
      <ParallaxLayer aria-hidden />

      <Inner as={motion.div} variants={container} initial="hidden" animate="visible">
        <motion.div variants={fadeUp}>
          <MicroBadge>
            <Dot aria-hidden />
            {t.hero.badge}
            <Dot aria-hidden />
          </MicroBadge>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Headline>{t.hero.headline}</Headline>
        </motion.div>

        <motion.div variants={fadeUp}>
          <Subheadline>{t.hero.subheadline}</Subheadline>
        </motion.div>

        <motion.div variants={btnWrap}>
          <CtaRow>
            <motion.div variants={fadeUp}>
              <CtaPrimary
                href={externalUrls.liveWatch}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.ctaLive}
              </CtaPrimary>
            </motion.div>
            <motion.div variants={fadeUp}>
              <CtaGhost
                href={homeHash(anchors.nuevoAqui)}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollToHash(anchors.nuevoAqui);
                }}
              >
                {t.hero.ctaPlanVisit}
              </CtaGhost>
            </motion.div>
            <motion.div variants={fadeUp}>
              <CtaGhost
                href={homeHash(anchors.historia)}
                onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                  e.preventDefault();
                  scrollToHash(anchors.historia);
                }}
              >
                {t.hero.ctaAbout}
              </CtaGhost>
            </motion.div>
          </CtaRow>
        </motion.div>
      </Inner>

      <ScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={
          prefersReduced ? { duration: 0.2 } : { delay: 1.2, duration: 0.8 }
        }
      >
        <ScrollLine aria-hidden />
        <span>{t.hero.scroll}</span>
      </ScrollIndicator>
    </HeroWrapper>
  );
}
