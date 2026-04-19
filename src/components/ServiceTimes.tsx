import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { googleMapsSearchUrl, siteInfo } from "../data/siteData";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";

const Section = styled("section", {
  padding: "$400 $100",
  backgroundColor: betaniaColors.warmWhite,
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
  marginBottom: "$100",
});

const ScheduleSummary = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "clamp(1.0625rem, 2.2vw, 1.25rem)",
  fontWeight: 600,
  lineHeight: 1.45,
  color: betaniaColors.mintDark,
  maxWidth: "640px",
  marginBottom: "$200",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "$100",
  "@md": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const Card = styled("div", {
  padding: "$150",
  borderRadius: "16px",
  backgroundColor: betaniaColors.cream,
  border: `1px solid ${betaniaColors.borderGray}`,
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 32px rgba(0,0,0,0.06)",
  },
});

const CardIcon = styled("div", {
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "$100",
  fontSize: "1.25rem",
  backgroundColor: betaniaColors.mintLight,
  color: betaniaColors.mintDark,
});

const CardTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.375rem",
  color: betaniaColors.black,
  marginBottom: "$025",
});

const CardDay = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: betaniaColors.darkRed,
});

const CardTime = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  color: betaniaColors.textMuted,
});

const CardDesc = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.5,
  color: betaniaColors.textMuted,
  marginTop: "$075",
});

const AddressRow = styled("div", {
  marginTop: "$200",
  display: "flex",
  alignItems: "center",
  gap: "$100",
  flexWrap: "wrap",
});

const AddressText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  color: betaniaColors.textMuted,
});

const DirectionsLink = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  fontWeight: 600,
  color: betaniaColors.darkRed,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: "4px",
  "&:hover": { textDecoration: "underline" },
});

const iconEmojis = ["\u2600", "\uD83D\uDCD6", "\u2B50", "\u2764\uFE0F"];

export default function ServiceTimes() {
  const { t } = useI18n();

  return (
    <Section id="horarios">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.serviceTimes.label}</SectionLabel>
          <SectionTitle>{t.serviceTimes.title}</SectionTitle>
          <SectionSub>{t.serviceTimes.subtitle}</SectionSub>
          <ScheduleSummary>{t.serviceTimes.scheduleSummary}</ScheduleSummary>
        </SectionReveal>

        <Grid>
          {t.serviceTimes.services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardIcon>{iconEmojis[i] || "\u26EA"}</CardIcon>
                <CardTitle>{s.title}</CardTitle>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginTop: "4px",
                  }}
                >
                  <CardDay>{s.day}</CardDay>
                  <span style={{ color: betaniaColors.borderGray }}>|</span>
                  <CardTime>{s.time}</CardTime>
                </div>
                <CardDesc>{s.description}</CardDesc>
              </Card>
            </motion.div>
          ))}
        </Grid>

        <AddressRow id="ubicacion">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke={betaniaColors.darkRed}
            strokeWidth="2"
          >
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.5" />
          </svg>
          <AddressText>{siteInfo.address}</AddressText>
          <DirectionsLink
            href={googleMapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.serviceTimes.directions} &rarr;
          </DirectionsLink>
        </AddressRow>
      </Inner>
    </Section>
  );
}
