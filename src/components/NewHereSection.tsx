import { styled } from "@washingtonpost/wpds-ui-kit";
import { motion, useReducedMotion } from "framer-motion";
import { betaniaColors } from "../theme/betaniaTheme";
import { useI18n } from "../i18n/I18nContext";
import { googleMapsSearchUrl } from "../data/siteData";
import { anchors, homeHash } from "../data/links";

const Section = styled("section", {
  position: "relative",
  padding: "$300 $100",
  backgroundColor: betaniaColors.softGray,
  borderTop: `1px solid ${betaniaColors.borderGray}`,
  borderBottom: `1px solid ${betaniaColors.borderGray}`,
  "@sm": { padding: "$250 $100" },
});

const Inner = styled("div", {
  maxWidth: "1100px",
  margin: "0 auto",
});

const Title = styled("h2", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "clamp(2rem, 4.5vw, 3rem)",
  lineHeight: 1.15,
  color: betaniaColors.black,
  textAlign: "center",
  marginBottom: "$200",
  letterSpacing: "-0.02em",
});

const Grid = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "$100",
  "@lg": { gridTemplateColumns: "repeat(2, 1fr)" },
  "@sm": { gridTemplateColumns: "1fr" },
});

const CardLink = styled("a", {
  display: "block",
  height: "100%",
  padding: "$150",
  borderRadius: "16px",
  backgroundColor: betaniaColors.warmWhite,
  border: `1px solid ${betaniaColors.borderGray}`,
  textDecoration: "none",
  color: "inherit",
  transition: "box-shadow 0.2s ease, border-color 0.2s ease, transform 0.2s ease",
  outline: "none",
  "&:hover": {
    borderColor: "rgba(93,184,140,0.45)",
    boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
    transform: "translateY(-2px)",
  },
  "&:focus-visible": {
    borderColor: betaniaColors.mint,
    boxShadow: `0 0 0 3px ${betaniaColors.cream}, 0 0 0 5px ${betaniaColors.mint}`,
  },
});

const IconWrap = styled("div", {
  width: "48px",
  height: "48px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: "$100",
  backgroundColor: betaniaColors.mintLight,
  color: betaniaColors.mintDark,
  flexShrink: 0,
});

const CardTitle = styled("h3", {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 700,
  fontSize: "1.375rem",
  lineHeight: 1.2,
  color: betaniaColors.black,
  marginBottom: "$050",
});

const CardLine = styled("p", {
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.875rem",
  lineHeight: 1.55,
  color: betaniaColors.textMuted,
  margin: 0,
});

function IconClock() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.75" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 2C8.5 2 6 4.6 6 8c0 4.2 6 14 6 14s6-9.8 6-14c0-3.4-2.5-6-6-6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="8" r="2" fill="currentColor" />
    </svg>
  );
}

function IconSpark() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3l1.2 4.4L18 9l-4.8 1.1L12 15l-1.2-4.9L6 9l4.8-1.6L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconKids() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.75" />
      <circle cx="16" cy="10" r="2.25" stroke="currentColor" strokeWidth="1.75" />
      <path
        d="M4 20c0-3 2.5-5 5-5m6 0c2.8 0 5 2 5 5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

const icons = [IconClock, IconPin, IconSpark, IconKids] as const;

export default function NewHereSection() {
  const { t } = useI18n();
  const prefersReduced = useReducedMotion();

  const cardLinks = [
    { href: homeHash(anchors.horarios), external: false },
    { href: googleMapsSearchUrl, external: true },
    { href: homeHash(anchors.queEsperar), external: false },
    { href: homeHash(anchors.ministerios), external: false },
  ] as const;

  return (
    <Section id="nuevo-aqui" aria-labelledby="nuevo-aqui-heading">
      <Inner>
        <Title id="nuevo-aqui-heading">{t.newHere.title}</Title>
        <Grid>
          {t.newHere.cards.map((card, i) => {
            const Icon = icons[i] ?? IconSpark;
            const link = cardLinks[i];
            return (
              <motion.div
                key={card.id}
                initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.45, delay: i * 0.06 }
                }
              >
                <CardLink
                  href={link.href}
                  {...(link.external
                    ? {
                        target: "_blank",
                        rel: "noopener noreferrer",
                      }
                    : {})}
                >
                  <IconWrap>
                    <Icon />
                  </IconWrap>
                  <CardTitle>{card.title}</CardTitle>
                  <CardLine>{card.line}</CardLine>
                </CardLink>
              </motion.div>
            );
          })}
        </Grid>
      </Inner>
    </Section>
  );
}
