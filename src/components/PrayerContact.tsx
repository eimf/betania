import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { useState } from "react";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  padding: "$400 $100",
  backgroundColor: betaniaColors.warmWhite,
  "@sm": { padding: "$300 $100" },
});

const Inner = styled("div", {
  maxWidth: "700px",
  margin: "0 auto",
  textAlign: "center",
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
  marginBottom: "$200",
});

const Form = styled("form", {
  display: "flex",
  flexDirection: "column",
  gap: "$100",
  textAlign: "left",
});

const InputGroup = styled("div", {
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
  backgroundColor: betaniaColors.cream,
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
  backgroundColor: betaniaColors.cream,
  color: betaniaColors.charcoal,
  outline: "none",
  resize: "vertical",
  minHeight: "120px",
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
  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
    transform: "none",
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

export default function PrayerContact() {
  const [submitted, setSubmitted] = useState(false);
  const { t } = useI18n();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="contacto">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.prayerContact.label}</SectionLabel>
          <SectionTitle>{t.prayerContact.title}</SectionTitle>
          <SectionSub>{t.prayerContact.subtitle}</SectionSub>
        </SectionReveal>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <SuccessMsg>{t.prayerContact.formSuccess}</SuccessMsg>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Input
                  type="text"
                  name="name"
                  placeholder={t.prayerContact.formName}
                  required
                  aria-label={t.prayerContact.formName}
                />
                <Input
                  type="text"
                  name="contact"
                  placeholder={t.prayerContact.formContact}
                  required
                  aria-label={t.prayerContact.formContact}
                />
              </InputGroup>
              <Textarea
                name="message"
                placeholder={t.prayerContact.formMessage}
                required
                aria-label={t.prayerContact.formMessage}
              />
              <CheckboxRow>
                <CheckboxInput type="checkbox" name="prayer" />
                {t.prayerContact.formPrayer}
              </CheckboxRow>
              <SubmitButton type="submit">
                {t.prayerContact.formSubmit}
              </SubmitButton>
            </Form>
          </motion.div>
        )}
      </Inner>
    </Section>
  );
}
