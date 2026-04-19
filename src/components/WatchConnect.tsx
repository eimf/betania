import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import SectionReveal from "./SectionReveal";
import { useI18n } from "../i18n/I18nContext";
import { externalUrls } from "../data/links";

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
  marginBottom: "$050",
});

const PlatformsSoon = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  lineHeight: 1.5,
  color: betaniaColors.charcoal,
  maxWidth: "520px",
  marginBottom: "$200",
});

const FacebookWordLink = styled("a", {
  color: betaniaColors.darkRed,
  fontWeight: 700,
  textDecoration: "underline",
  textUnderlineOffset: "3px",
  "&:hover": { opacity: 0.88 },
});

const TwoCol = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$150",
  "@sm": { gridTemplateColumns: "1fr" },
  "@md": { gridTemplateColumns: "1fr" },
});

const PlatformCard = styled("div", {
  borderRadius: "20px",
  overflow: "hidden",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: betaniaColors.warmWhite,
});

const PlatformHeader = styled("div", {
  padding: "$100 $125",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid ${betaniaColors.borderGray}`,
});

const PlatformName = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: "$075",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: "1rem",
  color: betaniaColors.black,
});

const PlatformFacebookTitle = styled("a", {
  display: "flex",
  alignItems: "center",
  gap: "$075",
  fontFamily: "'Inter', sans-serif",
  fontWeight: 600,
  fontSize: "1rem",
  color: betaniaColors.black,
  textDecoration: "none",
  outline: "none",
  "&:hover": { opacity: 0.88 },
  "&:focus-visible": {
    boxShadow: `0 0 0 3px rgba(200,146,42,0.35)`,
    borderRadius: "6px",
  },
});

const ComingSoonTag = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: betaniaColors.textMuted,
  padding: "$025 $075",
  borderRadius: "9999px",
  border: `1px solid ${betaniaColors.borderGray}`,
  backgroundColor: betaniaColors.softGray,
  whiteSpace: "nowrap",
});

const CardBody = styled("div", {
  minHeight: "140px",
  backgroundColor: "rgba(251,247,240,0.85)",
});

export default function WatchConnect() {
  const { t } = useI18n();

  return (
    <Section id="conectar">
      <Inner>
        <SectionReveal>
          <SectionLabel>{t.watchConnect.label}</SectionLabel>
          <SectionTitle>{t.watchConnect.title}</SectionTitle>
          <SectionSub>{t.watchConnect.subtitle}</SectionSub>
          <PlatformsSoon>
            {t.watchConnect.youtubeComingSoon}{" "}
            {t.watchConnect.facebookFollowLead}
            <FacebookWordLink
              href={externalUrls.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </FacebookWordLink>
            .
          </PlatformsSoon>
        </SectionReveal>

        <TwoCol>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <PlatformCard>
              <PlatformHeader>
                <PlatformName>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#c4302b" aria-hidden>
                    <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.528 3.5 12 3.5 12 3.5s-7.528 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.107 2.117C4.472 20.5 12 20.5 12 20.5s7.528 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </PlatformName>
                <ComingSoonTag>{t.watchConnect.comingSoon}</ComingSoonTag>
              </PlatformHeader>
              <CardBody aria-hidden />
            </PlatformCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PlatformCard>
              <PlatformHeader style={{ justifyContent: "flex-start" }}>
                <PlatformFacebookTitle
                  href={externalUrls.facebookPage}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2" aria-hidden>
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </PlatformFacebookTitle>
              </PlatformHeader>
              <CardBody aria-hidden />
            </PlatformCard>
          </motion.div>
        </TwoCol>
      </Inner>
    </Section>
  );
}
