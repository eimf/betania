import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion, useReducedMotion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";

const HeroWrapper = styled("section", {
  position: "relative",
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: betaniaColors.cream,
});

const HeroLogoBackdrop = styled("div", {
  position: "absolute",
  inset: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "$400 $100",
  pointerEvents: "none",
  "&::after": {
    content: "",
    position: "absolute",
    inset: 0,
    background: `linear-gradient(
      to bottom,
      rgba(250,249,246,0.5) 0%,
      rgba(250,249,246,0.25) 45%,
      rgba(250,249,246,0.65) 100%
    )`,
  },
});

const HeroLogo = styled("img", {
  position: "relative",
  zIndex: 0,
  width: "min(92vw, 640px)",
  height: "auto",
  maxHeight: "72vh",
  objectFit: "contain",
  opacity: 0.2,
  userSelect: "none",
});

const ParallaxLayer = styled("div", {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(ellipse at 50% 80%, rgba(93,184,140,0.1) 0%, transparent 60%)",
  pointerEvents: "none",
});

const Content = styled("div", {
  position: "relative",
  zIndex: 2,
  textAlign: "center",
  maxWidth: "820px",
  padding: "$200 $100",
  "@sm": { padding: "$300 $100 $150" },
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
  color: betaniaColors.mintDark,
  marginBottom: "$100",
  padding: "$025 $075",
  borderRadius: "9999px",
  border: "1px solid rgba(93,184,140,0.35)",
  backgroundColor: "rgba(93,184,140,0.1)",
});

const Dot = styled("span", {
  width: "6px",
  height: "6px",
  borderRadius: "50%",
  backgroundColor: betaniaColors.mint,
});

const Tagline = styled("h1", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
  lineHeight: 1.1,
  color: betaniaColors.black,
  marginBottom: "$100",
  letterSpacing: "-0.02em",
});

const AccentSpan = styled("span", {
  color: betaniaColors.darkRed,
});

const SubText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(1rem, 2vw, 1.25rem)",
  lineHeight: 1.6,
  color: "rgba(30,30,30,0.7)",
  maxWidth: "600px",
  margin: "0 auto $150",
});

const CtaRow = styled("div", {
  display: "flex",
  gap: "$100",
  justifyContent: "center",
  flexWrap: "wrap",
});

const PrimaryCta = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  padding: "$075 $150",
  borderRadius: "9999px",
  backgroundColor: betaniaColors.darkRed,
  color: "#fff",
  textDecoration: "none",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: betaniaColors.deepRed,
    transform: "translateY(-1px)",
  },
});

const SecondaryCta = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 500,
  padding: "$075 $150",
  borderRadius: "9999px",
  backgroundColor: "transparent",
  color: betaniaColors.black,
  border: `1px solid ${betaniaColors.borderGray}`,
  textDecoration: "none",
  transition: "all 0.25s ease",
  "&:hover": {
    backgroundColor: "rgba(17,17,17,0.04)",
    borderColor: betaniaColors.black,
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
  color: "rgba(30,30,30,0.35)",
  fontSize: "0.6875rem",
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
});

const ScrollLine = styled("div", {
  width: "1px",
  height: "32px",
  background:
    "linear-gradient(to bottom, rgba(93,184,140,0.6), transparent)",
});

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2, delayChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const reducedVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
};

export default function Hero() {
  const prefersReduced = useReducedMotion();
  const v = prefersReduced ? reducedVariants : itemVariants;
  const { t } = useI18n();

  return (
    <HeroWrapper id="hero">
      <HeroLogoBackdrop
        as={motion.div}
        initial={{ scale: 1.06, opacity: 0.85 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <HeroLogo
          src="/logos/logo-master.svg"
          alt=""
          decoding="async"
          draggable={false}
        />
      </HeroLogoBackdrop>
      <ParallaxLayer />

      <Content
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={v}>
          <MicroBadge>
            <Dot /> {t.hero.badge} <Dot />
          </MicroBadge>
        </motion.div>

        <motion.div variants={v}>
          <Tagline>
            {t.hero.title1}
            <br />
            <AccentSpan>{t.hero.title2}</AccentSpan>
          </Tagline>
        </motion.div>

        <motion.div variants={v}>
          <SubText>{t.hero.subtitle}</SubText>
        </motion.div>

        <motion.div variants={v}>
          <CtaRow>
            <PrimaryCta href="#horarios">{t.hero.ctaPrimary}</PrimaryCta>
            <SecondaryCta href="#que-esperar">
              {t.hero.ctaSecondary}
            </SecondaryCta>
          </CtaRow>
        </motion.div>
      </Content>

      <ScrollIndicator
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <ScrollLine />
        <span>{t.hero.scroll}</span>
      </ScrollIndicator>
    </HeroWrapper>
  );
}
