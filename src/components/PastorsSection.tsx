import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

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
  maxWidth: "620px",
  marginBottom: "$200",
});

const Card = styled("div", {
  borderRadius: "22px",
  overflow: "hidden",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: betaniaColors.cream,
  boxShadow: "0 10px 30px rgba(0,0,0,0.06)",
});

const Img = styled("img", {
  width: "100%",
  height: "auto",
  display: "block",
});

export default function PastorsSection() {
  const { t } = useI18n();

  return (
    <Section id="pastores">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.pastors.label}</SectionLabel>
          <SectionTitle>{t.pastors.title}</SectionTitle>
          <SectionSub>{t.pastors.subtitle}</SectionSub>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <Card>
            <Img
              src="/img/pastors.PNG"
              alt={t.pastors.imageAlt}
              loading="lazy"
            />
          </Card>
        </motion.div>
      </Inner>
    </Section>
  );
}
