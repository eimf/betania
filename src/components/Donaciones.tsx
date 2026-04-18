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

const MethodsGrid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "$100",
  marginBottom: "$200",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const MethodCard = styled("div", {
  padding: "$150",
  borderRadius: "16px",
  backgroundColor: betaniaColors.cream,
  border: `1px solid ${betaniaColors.borderGray}`,
  transition: "all 0.3s ease",
  position: "relative",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
  },
});

const MethodTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.375rem",
  color: betaniaColors.black,
  marginBottom: "$050",
});

const MethodText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
});

const ComingSoonBadge = styled("span", {
  display: "inline-block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.6875rem",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  color: betaniaColors.gold,
  backgroundColor: "rgba(200,146,42,0.1)",
  border: `1px solid rgba(200,146,42,0.25)`,
  padding: "2px 10px",
  borderRadius: "9999px",
  marginTop: "$075",
});

const WhereItGoesBlock = styled("div", {
  maxWidth: "700px",
  marginBottom: "$200",
});

const WhereTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: betaniaColors.black,
  marginBottom: "$100",
});

const BulletList = styled("ul", {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: "$075",
});

const BulletItem = styled("li", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
  display: "flex",
  alignItems: "flex-start",
  gap: "$075",
  "&::before": {
    content: "",
    display: "inline-block",
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    backgroundColor: betaniaColors.mint,
    marginTop: "8px",
    flexShrink: 0,
  },
});

const FaqSection = styled("div", {
  maxWidth: "700px",
  marginBottom: "$200",
});

const FaqTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  color: betaniaColors.black,
  marginBottom: "$100",
});

const FaqItem = styled("div", {
  borderBottom: `1px solid ${betaniaColors.borderGray}`,
  "&:last-child": { borderBottom: "none" },
});

const FaqQuestion = styled("button", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "$100 0",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  color: betaniaColors.black,
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  textAlign: "left",
  transition: "color 0.2s ease",
  "&:hover": { color: betaniaColors.darkRed },
});

const FaqChevron = styled("span", {
  fontSize: "1.25rem",
  transition: "transform 0.3s ease",
  color: betaniaColors.textMuted,
  flexShrink: 0,
  marginLeft: "$050",
});

const FaqAnswer = styled("div", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: betaniaColors.textMuted,
  paddingBottom: "$100",
});

const CtaRow = styled("div", {
  textAlign: "center",
});

const PrimaryCta = styled("a", {
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
  "&:hover": {
    backgroundColor: betaniaColors.deepRed,
    transform: "translateY(-1px)",
  },
});

export default function Donaciones() {
  const { t } = useI18n();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <Section id="donaciones">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.donations.label}</SectionLabel>
          <SectionTitle>{t.donations.title}</SectionTitle>
          <SectionSub>{t.donations.subtitle}</SectionSub>
        </SectionReveal>

        <MethodsGrid>
          {t.donations.methods.map((method, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <MethodCard>
                <MethodTitle>{method.title}</MethodTitle>
                <MethodText>{method.text}</MethodText>
                {"comingSoon" in method && method.comingSoon && (
                  <ComingSoonBadge>{method.comingSoon}</ComingSoonBadge>
                )}
              </MethodCard>
            </motion.div>
          ))}
        </MethodsGrid>

        <SectionReveal delay={0.2}>
          <WhereItGoesBlock>
            <WhereTitle>{t.donations.whereItGoes.title}</WhereTitle>
            <BulletList>
              {t.donations.whereItGoes.items.map((item, i) => (
                <BulletItem key={i}>{item}</BulletItem>
              ))}
            </BulletList>
          </WhereItGoesBlock>
        </SectionReveal>

        <SectionReveal delay={0.3}>
          <FaqSection>
            <FaqTitle>{t.donations.faqTitle}</FaqTitle>
            {t.donations.faq.map((item, i) => (
              <FaqItem key={i}>
                <FaqQuestion
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <FaqChevron
                    style={{
                      transform: openFaq === i ? "rotate(180deg)" : "rotate(0)",
                    }}
                  >
                    &#x25BE;
                  </FaqChevron>
                </FaqQuestion>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    <FaqAnswer>{item.a}</FaqAnswer>
                  </motion.div>
                )}
              </FaqItem>
            ))}
          </FaqSection>
        </SectionReveal>

        <CtaRow>
          <SectionReveal delay={0.4}>
            <PrimaryCta href="#contacto">
              {t.donations.ctaPrimary}
            </PrimaryCta>
          </SectionReveal>
        </CtaRow>
      </Inner>
    </Section>
  );
}
