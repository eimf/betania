import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { useState } from "react";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  padding: "$400 $100",
  backgroundColor: betaniaColors.cream,
  position: "relative",
  overflow: "hidden",
  "@sm": { padding: "$300 $100" },
});

const WaterLine = styled("div", {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  height: "4px",
  background: `linear-gradient(90deg, ${betaniaColors.mint}, ${betaniaColors.cream}, ${betaniaColors.mint})`,
  opacity: 0.5,
});

const Inner = styled("div", {
  position: "relative",
  maxWidth: "900px",
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
  maxWidth: "600px",
  marginBottom: "$200",
});

const InfoBlocks = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "$150",
  marginBottom: "$200",
});

const InfoBlock = styled("div", {
  padding: "$150",
  borderRadius: "16px",
  backgroundColor: betaniaColors.warmWhite,
  border: `1px solid ${betaniaColors.borderGray}`,
  transition: "all 0.3s ease",
  "&:hover": {
    boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
  },
});

const InfoTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.375rem",
  color: betaniaColors.black,
  marginBottom: "$050",
  display: "flex",
  alignItems: "center",
  gap: "$075",
});

const GoldDot = styled("span", {
  width: "8px",
  height: "8px",
  borderRadius: "50%",
  backgroundColor: betaniaColors.gold,
  flexShrink: 0,
});

const InfoText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
});

const FormArea = styled("div", {
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
});

const CtaButton = styled("button", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  padding: "$075 $200",
  borderRadius: "9999px",
  backgroundColor: betaniaColors.darkRed,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
  marginBottom: "$150",
  "&:hover": {
    backgroundColor: betaniaColors.deepRed,
    transform: "translateY(-1px)",
  },
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  textAlign: "left",
});

const InputRow = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$100",
  "@sm": { gridTemplateColumns: "1fr" },
});

const Input = styled("input", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  padding: "$075 $100",
  borderRadius: "12px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: betaniaColors.warmWhite,
  color: betaniaColors.charcoal,
  outline: "none",
  transition: "border-color 0.2s ease",
  "&:focus": { borderColor: betaniaColors.mint },
  "&::placeholder": { color: betaniaColors.textMuted, opacity: 0.7 },
});

const Textarea = styled("textarea", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  padding: "$075 $100",
  borderRadius: "12px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: betaniaColors.warmWhite,
  color: betaniaColors.charcoal,
  outline: "none",
  resize: "vertical",
  minHeight: "80px",
  transition: "border-color 0.2s ease",
  "&:focus": { borderColor: betaniaColors.mint },
  "&::placeholder": { color: betaniaColors.textMuted, opacity: 0.7 },
});

const CheckboxRow = styled("label", {
  display: "flex",
  alignItems: "center",
  gap: "$075",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  color: betaniaColors.charcoal,
  cursor: "pointer",
});

const CheckboxInput = styled("input", {
  width: "18px",
  height: "18px",
  accentColor: betaniaColors.darkRed,
  cursor: "pointer",
});

const SubmitButton = styled("button", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  padding: "$075 $150",
  borderRadius: "9999px",
  backgroundColor: betaniaColors.darkRed,
  color: "#fff",
  border: "none",
  cursor: "pointer",
  transition: "all 0.25s ease",
  alignSelf: "center",
  minWidth: "200px",
  "&:hover": {
    backgroundColor: betaniaColors.deepRed,
    transform: "translateY(-1px)",
  },
});

const SuccessMsg = styled("div", {
  padding: "$100 $150",
  borderRadius: "12px",
  backgroundColor: betaniaColors.mintLight,
  border: `1px solid ${betaniaColors.mint}`,
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  color: betaniaColors.mintDark,
  textAlign: "center",
});

export default function Bautismos() {
  const { t } = useI18n();
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const blocks = [t.baptisms.whatIs, t.baptisms.whoCan, t.baptisms.nextSteps];

  return (
    <Section id="bautismos">
      <WaterLine />
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.baptisms.label}</SectionLabel>
          <SectionTitle>{t.baptisms.title}</SectionTitle>
          <SectionSub>{t.baptisms.subtitle}</SectionSub>
        </SectionReveal>

        <InfoBlocks>
          {blocks.map((block, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <InfoBlock>
                <InfoTitle>
                  <GoldDot />
                  {block.title}
                </InfoTitle>
                <InfoText>{block.text}</InfoText>
              </InfoBlock>
            </motion.div>
          ))}
        </InfoBlocks>

        <FormArea>
          {!showForm && !submitted && (
            <SectionReveal delay={0.3}>
              <CtaButton onClick={() => setShowForm(true)}>
                {t.baptisms.cta}
              </CtaButton>
            </SectionReveal>
          )}

          {showForm && !submitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Form onSubmit={handleSubmit}>
                <InputRow>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t.baptisms.formName}
                    required
                    aria-label={t.baptisms.formName}
                  />
                  <Input
                    type="text"
                    name="age"
                    placeholder={t.baptisms.formAge}
                    aria-label={t.baptisms.formAge}
                  />
                </InputRow>
                <Input
                  type="text"
                  name="contact"
                  placeholder={t.baptisms.formContact}
                  required
                  aria-label={t.baptisms.formContact}
                />
                <Textarea
                  name="questions"
                  placeholder={t.baptisms.formQuestions}
                  aria-label={t.baptisms.formQuestions}
                />
                <CheckboxRow>
                  <CheckboxInput type="checkbox" name="leader" />
                  {t.baptisms.formLeader}
                </CheckboxRow>
                <SubmitButton type="submit">
                  {t.baptisms.formSubmit}
                </SubmitButton>
              </Form>
            </motion.div>
          )}

          {submitted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <SuccessMsg>{t.baptisms.formSuccess}</SuccessMsg>
            </motion.div>
          )}
        </FormArea>
      </Inner>
    </Section>
  );
}
