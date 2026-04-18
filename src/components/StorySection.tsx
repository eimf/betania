import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  position: "relative",
  padding: "$400 $100",
  overflow: "hidden",
  "@sm": { padding: "$300 $100" },
});

const BgImage = styled("div", {
  position: "absolute",
  inset: 0,
  backgroundImage: "url(/story-bg.webp)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  "&::after": {
    content: "",
    position: "absolute",
    inset: 0,
    background: `linear-gradient(
      135deg,
      rgba(250,249,246,0.92) 0%,
      rgba(250,249,246,0.88) 50%,
      rgba(232,245,238,0.85) 100%
    )`,
  },
});

const Inner = styled("div", {
  position: "relative",
  zIndex: 2,
  maxWidth: "900px",
  margin: "0 auto",
  textAlign: "center",
});

const Label = styled("span", {
  display: "inline-block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: betaniaColors.mint,
  marginBottom: "$100",
});

const Title = styled("h2", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2rem, 5vw, 3.5rem)",
  lineHeight: 1.15,
  color: betaniaColors.black,
  marginBottom: "$150",
});

const Narrative = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
  lineHeight: 1.7,
  color: "rgba(30,30,30,0.75)",
  maxWidth: "700px",
  margin: "0 auto $200",
});

const StatementBlock = styled("div", {
  margin: "$200 auto 0",
  padding: "$200 $150",
  maxWidth: "700px",
  borderRadius: "20px",
  border: `1px solid rgba(163,35,40,0.2)`,
  backgroundColor: "rgba(163,35,40,0.04)",
  backdropFilter: "blur(8px)",
  "@sm": { padding: "$150 $100" },
});

const StatementText = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(1.5rem, 3.5vw, 2.25rem)",
  lineHeight: 1.25,
  color: betaniaColors.black,
  marginBottom: "$075",
});

const Verse = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: betaniaColors.darkRed,
  letterSpacing: "0.05em",
});

const Divider = styled("div", {
  width: "48px",
  height: "2px",
  backgroundColor: betaniaColors.mint,
  margin: "0 auto $150",
  borderRadius: "1px",
});

const MicroMessages = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$150",
  marginTop: "$200",
  flexWrap: "wrap",
  "@sm": { gap: "$100" },
});

const MicroPill = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: betaniaColors.charcoal,
  padding: "$050 $100",
  borderRadius: "9999px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: "rgba(255,255,255,0.6)",
});

export default function StorySection() {
  const { t } = useI18n();

  return (
    <Section id="historia">
      <BgImage />
      <Inner>
        <SectionReveal>
          <Label>{t.story.label}</Label>
          <Title>{t.story.title}</Title>
          <Divider />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <Narrative>{t.story.narrative1}</Narrative>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <Narrative>{t.story.narrative2}</Narrative>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <StatementBlock>
            <StatementText>
              &ldquo;{t.story.verse}&rdquo;
            </StatementText>
            <Verse>&mdash; {t.story.verseRef}</Verse>
          </StatementBlock>
        </motion.div>

        <MicroMessages>
          {t.story.pills.map((msg, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
            >
              <MicroPill>{msg}</MicroPill>
            </motion.span>
          ))}
        </MicroMessages>
      </Inner>
    </Section>
  );
}
