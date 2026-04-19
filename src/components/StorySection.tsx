import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  position: "relative",
  padding: "$500 $100",
  overflow: "hidden",
  "@sm": { padding: "$350 $100" },
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
      165deg,
      rgba(26,29,43,0.88) 0%,
      rgba(26,29,43,0.82) 45%,
      rgba(18,20,28,0.9) 100%
    )`,
  },
});

const Inner = styled("div", {
  position: "relative",
  zIndex: 2,
  maxWidth: "720px",
  margin: "0 auto",
  textAlign: "center",
  padding: "0 $050",
  "@sm": { maxWidth: "100%", padding: "0" },
});

const Label = styled("span", {
  display: "inline-block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: betaniaColors.goldenAmber,
  marginBottom: "$125",
});

const Title = styled("h2", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2.125rem, 5.5vw, 3.65rem)",
  lineHeight: 1.12,
  color: betaniaColors.paper,
  margin: "0 auto $125",
  letterSpacing: "-0.02em",
});

const Divider = styled("div", {
  width: "56px",
  height: "2px",
  backgroundColor: betaniaColors.goldenAmber,
  margin: "0 auto $200",
  borderRadius: "1px",
});

const Narrative = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(1.125rem, 2.35vw, 1.4rem)",
  lineHeight: 1.75,
  color: "rgba(255,252,247,0.86)",
  maxWidth: "640px",
  margin: "0 auto $200",
});

const StatementBlock = styled("div", {
  margin: "$250 auto 0",
  padding: "$250 $175",
  maxWidth: "640px",
  borderRadius: "4px",
  border: `1px solid rgba(200,146,42,0.55)`,
  backgroundColor: "rgba(10,12,18,0.55)",
  backdropFilter: "blur(10px)",
  boxShadow: "0 24px 60px rgba(0,0,0,0.25)",
  "@sm": { padding: "$200 $100" },
});

const StatementText = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(1.35rem, 3.2vw, 2rem)",
  lineHeight: 1.35,
  color: betaniaColors.paper,
  margin: "0 0 $100",
});

const Verse = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: betaniaColors.goldenAmber,
  letterSpacing: "0.06em",
});

const MicroMessages = styled("div", {
  display: "flex",
  justifyContent: "center",
  gap: "$125",
  marginTop: "$250",
  flexWrap: "wrap",
  "@sm": { gap: "$075" },
});

const MicroPill = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 500,
  color: "rgba(255,252,247,0.92)",
  padding: "$050 $100",
  borderRadius: "9999px",
  border: "1px solid rgba(255,252,247,0.18)",
  backgroundColor: "rgba(255,252,247,0.06)",
});

export default function StorySection() {
  const { t } = useI18n();

  return (
    <Section id="historia">
      <BgImage aria-hidden />
      <Inner>
        <SectionReveal>
          <Label>{t.story.label}</Label>
          <Title>
            {t.story.titleLine1}
            <br />
            {t.story.titleLine2}
          </Title>
          <Divider aria-hidden />
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <Narrative>{t.story.narrative1}</Narrative>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <Narrative>{t.story.narrative2}</Narrative>
        </SectionReveal>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
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
              key={msg}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
            >
              <MicroPill>{msg}</MicroPill>
            </motion.span>
          ))}
        </MicroMessages>
      </Inner>
    </Section>
  );
}
