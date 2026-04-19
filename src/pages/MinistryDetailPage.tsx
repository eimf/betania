import { styled } from "@washingtonpost/wpds-ui-kit";
import { Link, Navigate, useParams } from "react-router-dom";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";
import { anchors, homeHash } from "../data/links";
import { MINISTRY_SLUGS, isMinistrySlug } from "../data/ministrySlugs";

const accentColors = [
  betaniaColors.gold,
  betaniaColors.mint,
  betaniaColors.darkRed,
  "#166dfc",
  betaniaColors.mintDark,
  betaniaColors.deepGold,
  betaniaColors.darkRed,
] as const;

const Page = styled("div", {
  minHeight: "100vh",
  paddingTop: "100px",
  paddingBottom: "$400",
  paddingLeft: "$100",
  paddingRight: "$100",
  backgroundColor: betaniaColors.warmCream,
  "@sm": { paddingTop: "88px" },
});

const Inner = styled("article", {
  maxWidth: "720px",
  margin: "0 auto",
});

const Back = styled("a", {
  display: "inline-flex",
  alignItems: "center",
  gap: "$050",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.8125rem",
  fontWeight: 600,
  color: betaniaColors.mintDark,
  textDecoration: "none",
  marginBottom: "$200",
  "&:hover": { textDecoration: "underline" },
});

const Dot = styled("div", {
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  marginBottom: "$100",
});

const Kicker = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: betaniaColors.textMuted,
  display: "block",
  marginBottom: "$075",
});

const Title = styled("h1", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2.25rem, 5vw, 3.25rem)",
  lineHeight: 1.12,
  color: betaniaColors.black,
  marginBottom: "$100",
});

const Lead = styled("p", {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(1.2rem, 2.5vw, 1.45rem)",
  lineHeight: 1.55,
  color: "rgba(30,30,30,0.78)",
  marginBottom: "$150",
});

const Body = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "1rem",
  lineHeight: 1.75,
  color: betaniaColors.textMuted,
  marginBottom: "$125",
});

const CtaRow = styled("div", {
  marginTop: "$250",
});

const CtaPrimary = styled("a", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.9375rem",
  fontWeight: 600,
  padding: "$075 $125",
  borderRadius: "9999px",
  textDecoration: "none",
  backgroundColor: betaniaColors.darkRed,
  color: "#fff",
  "&:hover": {
    backgroundColor: betaniaColors.deepRed,
  },
});

export default function MinistryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useI18n();

  if (!slug || !isMinistrySlug(slug)) {
    return <Navigate to="/" replace />;
  }

  const index = MINISTRY_SLUGS.indexOf(slug);
  const item = t.ministries.items[index];
  const detail = t.ministries.detailPages[index];
  const accent = accentColors[index % accentColors.length];

  return (
    <Page>
      <Inner>
        <Back as={Link} to={homeHash(anchors.ministerios)}>
          &larr; {t.ministries.pageBack}
        </Back>
        <Kicker>{t.ministries.label}</Kicker>
        <Dot style={{ backgroundColor: accent }} aria-hidden />
        <Title>{item.title}</Title>
        <Lead>{item.description}</Lead>
        <Lead>{detail.intro}</Lead>
        {detail.paragraphs.map((p, i) => (
          <Body key={i}>{p}</Body>
        ))}
        <CtaRow>
          <CtaPrimary as={Link} to={homeHash("#contacto")}>
            {t.ministries.pageContactCta}
          </CtaPrimary>
        </CtaRow>
      </Inner>
    </Page>
  );
}
