import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  padding: "$400 $100",
  backgroundColor: betaniaColors.cream,
  position: "relative",
  "@sm": { padding: "$300 $100" },
});

const Inner = styled("div", {
  maxWidth: "1100px",
  margin: "0 auto",
});

const SectionLabel = styled("span", {
  display: "inline-block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: betaniaColors.mint,
  marginBottom: "$050",
});

const SectionTitle = styled("h2", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4vw, 3rem)",
  lineHeight: 1.15,
  color: betaniaColors.black,
  marginBottom: "$050",
});

const SectionSub = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "1rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
  maxWidth: "520px",
  marginBottom: "$200",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "$100",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const ExpectCard = styled("div", {
  padding: "$150",
  borderRadius: "16px",
  backgroundColor: betaniaColors.warmWhite,
  border: `1px solid ${betaniaColors.borderGray}`,
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&::before": {
    content: "",
    position: "absolute",
    top: 0,
    left: 0,
    width: "4px",
    height: "100%",
    backgroundColor: betaniaColors.mint,
    borderRadius: "2px 0 0 2px",
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
    "&::before": { opacity: 1 },
  },
});

const CardTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.25rem",
  color: betaniaColors.black,
  marginBottom: "$025",
});

const CardText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
});

export default function WhatToExpect() {
  const { t } = useI18n();

  return (
    <Section id="que-esperar">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.whatToExpect.label}</SectionLabel>
          <SectionTitle>{t.whatToExpect.title}</SectionTitle>
          <SectionSub>{t.whatToExpect.subtitle}</SectionSub>
        </SectionReveal>

        <Grid>
          {t.whatToExpect.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ExpectCard>
                <CardTitle>{item.title}</CardTitle>
                <CardText>{item.text}</CardText>
              </ExpectCard>
            </motion.div>
          ))}
        </Grid>
      </Inner>
    </Section>
  );
}
