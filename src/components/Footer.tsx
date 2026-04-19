import { styled } from "@washingtonpost/wpds-ui-kit";
import { siteInfo } from "../data/siteData";
import { externalUrls, homeHash } from "../data/links";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";

const FooterWrapper = styled("footer", {
  backgroundColor: betaniaColors.black,
  color: "#fff",
  padding: "$300 $100 $100",
  "@sm": { padding: "$200 $100 $100" },
});

const Inner = styled("div", {
  maxWidth: "1100px",
  margin: "0 auto",
});

const TopRow = styled("div", {
  display: "grid",
  gridTemplateColumns: "1.5fr 1fr 1fr 1fr",
  gap: "$150",
  marginBottom: "$200",
  "@md": { gridTemplateColumns: "1fr 1fr" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const BrandCol = styled("div", {});

const Logo = styled("span", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.5rem",
  display: "block",
  marginBottom: "$075",
});

const BrandText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.6,
  color: "rgba(255,255,255,0.55)",
  maxWidth: "300px",
});

const ColTitle = styled("h4", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  fontWeight: 600,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: betaniaColors.mint,
  marginBottom: "$075",
});

const ColLink = styled("a", {
  display: "block",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  marginBottom: "$050",
  transition: "color 0.2s ease",
  "&:hover": { color: "#fff" },
});

const ColText = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  color: "rgba(255,255,255,0.55)",
  marginBottom: "$050",
  lineHeight: 1.5,
});

const DividerLine = styled("div", {
  height: "1px",
  backgroundColor: "rgba(255,255,255,0.08)",
  marginBottom: "$100",
});

const BottomRow = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: "$075",
});

const Copyright = styled("span", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.75rem",
  color: "rgba(255,255,255,0.35)",
});

const Socials = styled("div", {
  display: "flex",
  gap: "$075",
});

const SocialLink = styled("a", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "36px",
  borderRadius: "50%",
  backgroundColor: "rgba(255,255,255,0.06)",
  color: "rgba(255,255,255,0.55)",
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": {
    backgroundColor: "rgba(93,184,140,0.2)",
    color: betaniaColors.mint,
  },
});

export default function Footer() {
  const { t } = useI18n();

  const navLinks = [
    { label: t.nav.horarios, href: homeHash("#horarios") },
    { label: t.nav.queEsperar, href: homeHash("#que-esperar") },
    { label: t.nav.conserjeria, href: homeHash("#conserjeria") },
    { label: t.nav.historia, href: homeHash("#historia") },
    { label: t.nav.ministerios, href: homeHash("#ministerios") },
    { label: t.nav.bautismos, href: homeHash("#bautismos") },
    { label: t.nav.conectar, href: homeHash("#conectar") },
    { label: t.nav.donaciones, href: homeHash("#donaciones") },
    { label: t.nav.contacto, href: homeHash("#contacto") },
  ];

  return (
    <FooterWrapper>
      <Inner>
        <TopRow>
          <BrandCol>
            <Logo>{t.footer.brand}</Logo>
            <BrandText>{t.footer.brandText}</BrandText>
          </BrandCol>

          <div>
            <ColTitle>{t.footer.links}</ColTitle>
            {navLinks.map((l) => (
              <ColLink key={l.href} href={l.href}>
                {l.label}
              </ColLink>
            ))}
          </div>

          <div>
            <ColTitle>{t.footer.schedules}</ColTitle>
            <ColText>{t.serviceTimes.scheduleSummary}</ColText>
          </div>

          <div>
            <ColTitle>{t.footer.contact}</ColTitle>
            <ColText>{siteInfo.address}</ColText>
            <ColText>{siteInfo.phone}</ColText>
            <ColLink href={`mailto:${siteInfo.email}`}>
              {siteInfo.email}
            </ColLink>
          </div>
        </TopRow>

        <DividerLine />

        <BottomRow>
          <Copyright>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </Copyright>
          <Socials>
            <SocialLink
              href={siteInfo.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a2.994 2.994 0 00-2.107-2.117C19.528 3.5 12 3.5 12 3.5s-7.528 0-9.391.569A2.994 2.994 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a2.994 2.994 0 002.107 2.117C4.472 20.5 12 20.5 12 20.5s7.528 0 9.391-.569a2.994 2.994 0 002.107-2.117C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </SocialLink>
            <SocialLink
              href={externalUrls.facebookPage}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialLink>
          </Socials>
        </BottomRow>
      </Inner>
    </FooterWrapper>
  );
}
