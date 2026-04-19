import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";
import { MINISTRY_SLUGS } from "../data/ministrySlugs";

const Section = styled("section", {
  padding: "$400 $100",
  backgroundColor: betaniaColors.warmWhite,
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
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "$100",
  "@lg": { gridTemplateColumns: "repeat(3, 1fr)" },
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const accentColors = [
  betaniaColors.gold,
  betaniaColors.mint,
  betaniaColors.darkRed,
  "#166dfc",
  betaniaColors.mintDark,
  betaniaColors.deepGold,
  betaniaColors.darkRed,
];

const Card = styled(Link, {
  display: "block",
  padding: "$150",
  borderRadius: "16px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: betaniaColors.cream,
  transition: "all 0.3s ease",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  outline: "none",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
  },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px ${betaniaColors.cream}, 0 0 0 5px ${betaniaColors.mint}`,
  },
});

const CardDot = styled("div", {
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  marginBottom: "$075",
});

const CardTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.375rem",
  color: betaniaColors.black,
  marginBottom: "$050",
});

const CardDesc = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
});

const CardArrow = styled("span", {
  display: "inline-block",
  marginTop: "$075",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  transition: "transform 0.2s ease",
});

export default function Ministries() {
  const { t } = useI18n();

  return (
    <Section id="ministerios">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.ministries.label}</SectionLabel>
          <SectionTitle>{t.ministries.title}</SectionTitle>
          <SectionSub>{t.ministries.subtitle}</SectionSub>
        </SectionReveal>

        <Grid>
          {t.ministries.items.map((m, i) => {
            const accent = accentColors[i % accentColors.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <Card to={`/ministerios/${MINISTRY_SLUGS[i]}`}>
                  <CardDot style={{ backgroundColor: accent }} />
                  <CardTitle>{m.title}</CardTitle>
                  <CardDesc>{m.description}</CardDesc>
                  <CardArrow style={{ color: accent }}>
                    {t.ministries.learnMore} &rarr;
                  </CardArrow>
                </Card>
              </motion.div>
            );
          })}
        </Grid>
      </Inner>
    </Section>
  );
}
