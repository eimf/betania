import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { useState } from "react";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  padding: "$400 $100",
  backgroundColor: betaniaColors.cream,
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
  marginBottom: "$200",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const Card = styled("div", {
  padding: "$150",
  borderRadius: "16px",
  backgroundColor: betaniaColors.warmWhite,
  border: `1px solid ${betaniaColors.borderGray}`,
  transition: "all 0.3s ease",
  position: "relative",
  overflow: "hidden",
  "&::after": {
    content: "",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: "3px",
    background: `linear-gradient(90deg, ${betaniaColors.gold}, transparent)`,
    opacity: 0,
    transition: "opacity 0.3s ease",
  },
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
    "&::after": { opacity: 1 },
  },
});

const CardTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.25rem",
  color: betaniaColors.black,
  marginBottom: "$050",
});

const CardText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
});

const FormWrapper = styled("div", {
  maxWidth: "600px",
  margin: "0 auto",
  textAlign: "center",
});

const CtaButton = styled("a", {
  display: "inline-block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  padding: "$075 $200",
  borderRadius: "9999px",
  backgroundColor: betaniaColors.darkRed,
  color: "#fff",
  textDecoration: "none",
  transition: "all 0.25s ease",
  cursor: "pointer",
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
  minHeight: "100px",
  transition: "border-color 0.2s ease",
  "&:focus": { borderColor: betaniaColors.mint },
  "&::placeholder": { color: betaniaColors.textMuted, opacity: 0.7 },
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
  minWidth: "180px",
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

export default function Conserjeria() {
  const { t } = useI18n();
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <Section id="conserjeria">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.conserjeria.label}</SectionLabel>
          <SectionTitle>{t.conserjeria.title}</SectionTitle>
          <SectionSub>{t.conserjeria.subtitle}</SectionSub>
        </SectionReveal>

        <Grid>
          {t.conserjeria.cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardTitle>{card.title}</CardTitle>
                <CardText>{card.text}</CardText>
              </Card>
            </motion.div>
          ))}
        </Grid>

        <FormWrapper>
          {!showForm && !submitted && (
            <SectionReveal delay={0.3}>
              <CtaButton
                as="button"
                onClick={() => setShowForm(true)}
                style={{ border: "none" }}
              >
                {t.conserjeria.cta}
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
                <Input
                  type="text"
                  name="name"
                  placeholder={t.conserjeria.formName}
                  required
                  aria-label={t.conserjeria.formName}
                />
                <Input
                  type="text"
                  name="contact"
                  placeholder={t.conserjeria.formContact}
                  required
                  aria-label={t.conserjeria.formContact}
                />
                <Textarea
                  name="message"
                  placeholder={t.conserjeria.formMessage}
                  aria-label={t.conserjeria.formMessage}
                />
                <SubmitButton type="submit">
                  {t.conserjeria.formSubmit}
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
              <SuccessMsg>{t.conserjeria.formSuccess}</SuccessMsg>
            </motion.div>
          )}
        </FormWrapper>
      </Inner>
    </Section>
  );
}
