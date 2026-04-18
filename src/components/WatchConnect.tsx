import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion } from "framer-motion";
import { siteInfo } from "../data/siteData";
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

const PlatformLink = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: betaniaColors.darkRed,
  textDecoration: "none",
  "&:hover": { textDecoration: "underline" },
});

const MockGrid = styled("div", {
  padding: "$100",
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "$075",
  "@sm": { gridTemplateColumns: "1fr" },
});

const MockThumb = styled("div", {
  borderRadius: "12px",
  overflow: "hidden",
  position: "relative",
  paddingBottom: "56.25%",
  backgroundColor: betaniaColors.softGray,
});

const ThumbOverlay = styled("div", {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  padding: "$075",
  background:
    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
});

const ThumbTitle = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  color: "#fff",
  lineHeight: 1.3,
});

const ThumbMeta = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.625rem",
  color: "rgba(255,255,255,0.7)",
  marginTop: "2px",
});

const MockFeedItem = styled("div", {
  padding: "$100",
  borderBottom: `1px solid ${betaniaColors.borderGray}`,
  "&:last-child": { borderBottom: "none" },
});

const FeedText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.5,
  color: betaniaColors.charcoal,
});

const FeedMeta = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  color: betaniaColors.textMuted,
  marginTop: "4px",
  display: "block",
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
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#c4302b">
                    <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.528 3.5 12 3.5 12 3.5s-7.528 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.107 2.117C4.472 20.5 12 20.5 12 20.5s7.528 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  YouTube
                </PlatformName>
                <PlatformLink href={siteInfo.youtube} target="_blank" rel="noopener noreferrer">
                  {t.watchConnect.subscribe} &rarr;
                </PlatformLink>
              </PlatformHeader>
              <MockGrid>
                {t.watchConnect.ytThumbs.map((thumb, i) => (
                  <MockThumb key={i}>
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: `linear-gradient(135deg, ${betaniaColors.black} 0%, ${betaniaColors.mintDark} 100%)`,
                      }}
                    />
                    <ThumbOverlay>
                      <ThumbTitle>{thumb.title}</ThumbTitle>
                      <ThumbMeta>{thumb.meta}</ThumbMeta>
                    </ThumbOverlay>
                  </MockThumb>
                ))}
              </MockGrid>
            </PlatformCard>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PlatformCard>
              <PlatformHeader>
                <PlatformName>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </PlatformName>
                <PlatformLink href={siteInfo.facebook} target="_blank" rel="noopener noreferrer">
                  {t.watchConnect.follow} &rarr;
                </PlatformLink>
              </PlatformHeader>
              {t.watchConnect.fbPosts.map((post, i) => (
                <MockFeedItem key={i}>
                  <FeedText>{post.text}</FeedText>
                  <FeedMeta>{post.meta}</FeedMeta>
                </MockFeedItem>
              ))}
            </PlatformCard>
          </motion.div>
        </TwoCol>
      </Inner>
    </Section>
  );
}
