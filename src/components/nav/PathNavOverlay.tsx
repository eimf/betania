import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useI18n } from "../../i18n/I18nContext";
import { navModel } from "./navModel";
import { useFocusTrap } from "./useFocusTrap";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";
import ParticlesOliveLeaves from "./ParticlesOliveLeaves";
import {
  OverlayRoot,
  GrainLayer,
  PathStage,
  PanelAside,
  PanelBottomSheet,
  PanelTitle,
  PanelMicrocopy,
  PanelCta,
  TopBar,
  DialogTitle,
  CloseButton,
  WaypointButton,
  WaypointLabel,
} from "../../styles/navStyles";
import { betaniaColors } from "../../theme/betaniaTheme";

interface Props {
  open: boolean;
  onClose: () => void;
  activeSectionId: string;
}

const STAGE_W = 1100;
const STAGE_H = 560;

function buildPath(points: { x: number; y: number }[]): string {
  if (points.length === 0) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const mx = (prev.x + curr.x) / 2;
    d += ` Q ${mx} ${prev.y}, ${mx} ${(prev.y + curr.y) / 2}`;
    d += ` T ${curr.x} ${curr.y}`;
  }
  return d;
}

function iconPath(name: string): JSX.Element {
  switch (name) {
    case "home":
      return <path d="M4 11L12 4l8 7v8a1 1 0 01-1 1h-4v-6h-6v6H5a1 1 0 01-1-1v-8z" fill="none" stroke="currentColor" strokeWidth="1.5" />;
    case "clock":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="8" /><path d="M12 8v4l3 2" /></g>;
    case "door":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 3h12v18H6z" /><circle cx="15" cy="12" r="0.8" fill="currentColor" /></g>;
    case "heart":
      return <path d="M12 20s-7-4.5-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.5-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="1.5" />;
    case "scroll":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 5h10a2 2 0 012 2v12H7a2 2 0 01-2-2V5z" /><path d="M9 9h6M9 13h6" /></g>;
    case "people":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="3" /><circle cx="17" cy="10" r="2.2" /><path d="M3 19c0-3 2.5-5 6-5s6 2 6 5M15 19c0-2 1.5-3.5 4-3.5S21 17 21 19" /></g>;
    case "water":
      return <path d="M12 3s-6 7-6 11a6 6 0 0012 0c0-4-6-11-6-11z" fill="none" stroke="currentColor" strokeWidth="1.5" />;
    case "play":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="6" width="18" height="12" rx="2" /><path d="M10 10l5 3-5 3z" fill="currentColor" /></g>;
    case "gift":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="4" y="10" width="16" height="10" /><path d="M4 10h16M12 10v10M8 10a2 2 0 110-4c2 0 4 4 4 4s2-4 4-4a2 2 0 110 4" /></g>;
    case "pray":
      return <g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 3v7l-3 3v6h4M14 3v7l3 3v6h-4" /></g>;
    default:
      return <circle cx="12" cy="12" r="4" fill="currentColor" />;
  }
}

export default function PathNavOverlay({ open, onClose, activeSectionId }: Props) {
  const { t } = useI18n();
  const reduced = usePrefersReducedMotion();
  const rootRef = useRef<HTMLDivElement | null>(null);
  const [previewIdx, setPreviewIdx] = useState<number>(0);
  const pathRef = useRef<SVGPathElement | null>(null);

  const activeIdx = useMemo(() => {
    const i = navModel.findIndex((w) => w.id === activeSectionId);
    return i >= 0 ? i : 0;
  }, [activeSectionId]);

  useEffect(() => {
    if (open) setPreviewIdx(activeIdx);
  }, [open, activeIdx]);

  useFocusTrap(rootRef, open, onClose);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const positions = useMemo(() => {
    const count = navModel.length;
    const topPad = 120;
    const bottomPad = 120;
    const leftPad = 120;
    const rightPad = 120;
    return navModel.map((_, i) => {
      const t = count <= 1 ? 0 : i / (count - 1);
      const x = leftPad + t * (STAGE_W - leftPad - rightPad);
      const wave = Math.sin(t * Math.PI * 2.2) * 90;
      const y = topPad + t * (STAGE_H - topPad - bottomPad) * 0.2 + STAGE_H / 2 - 40 + wave;
      return { x, y };
    });
  }, []);

  const pathD = useMemo(() => buildPath(positions), [positions]);

  const navigate = (idx: number) => {
    const target = navModel[idx];
    if (!target) return;
    const el = document.getElementById(target.id);
    if (el) {
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    }
    onClose();
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();
        setPreviewIdx((p) => Math.min(navModel.length - 1, p + 1));
      } else if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();
        setPreviewIdx((p) => Math.max(0, p - 1));
      } else if (e.key === "Enter") {
        if (document.activeElement?.tagName !== "BUTTON") {
          navigate(previewIdx);
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, previewIdx, reduced]);

  const [pointerStart, setPointerStart] = useState<{ x: number; y: number; id: EventTarget | null } | null>(null);
  const onBackdropPointerDown = (e: React.PointerEvent) => {
    setPointerStart({ x: e.clientX, y: e.clientY, id: e.target });
  };
  const onBackdropPointerUp = (e: React.PointerEvent) => {
    if (!pointerStart) return;
    const dx = Math.abs(e.clientX - pointerStart.x);
    const dy = Math.abs(e.clientY - pointerStart.y);
    if (e.target === pointerStart.id && dx < 6 && dy < 6 && e.target === rootRef.current) {
      onClose();
    }
    setPointerStart(null);
  };

  const previewWaypoint = navModel[previewIdx];
  const labels = t.pathNav.waypoints;
  const title = labels[previewWaypoint.labelKey].label;
  const micro = labels[previewWaypoint.labelKey].microcopy;
  const ctaLabel = labels[previewWaypoint.labelKey].ctaLabel;

  if (!open) return null;

  return (
    <OverlayRoot
      as={motion.div}
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby="path-nav-title"
      aria-describedby="path-nav-sub"
      id="path-nav-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduced ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
      onPointerDown={onBackdropPointerDown}
      onPointerUp={onBackdropPointerUp}
    >
      <GrainLayer />
      <ParticlesOliveLeaves active={!reduced} />

      <TopBar>
        <DialogTitle id="path-nav-title">{t.pathNav.title}</DialogTitle>
        <CloseButton onClick={onClose} aria-label={t.pathNav.close}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </CloseButton>
      </TopBar>

      <PathStage>
        <div
          style={{
            position: "relative",
            width: "100%",
            maxWidth: STAGE_W,
            aspectRatio: `${STAGE_W} / ${STAGE_H}`,
          }}
        >
          <svg
            viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
            width="100%"
            height="100%"
            aria-hidden="true"
            style={{ position: "absolute", inset: 0, overflow: "visible" }}
          >
            <defs>
              <linearGradient id="lantern-path" x1="0" x2="1" y1="0" y2="0">
                <stop offset="0%" stopColor={betaniaColors.gold} stopOpacity="0.2" />
                <stop offset="50%" stopColor={betaniaColors.gold} stopOpacity="0.9" />
                <stop offset="100%" stopColor={betaniaColors.mint} stopOpacity="0.6" />
              </linearGradient>
            </defs>
            <motion.path
              ref={pathRef}
              d={pathD}
              fill="none"
              stroke="url(#lantern-path)"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="4 8"
              initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: reduced ? 0 : 0.9, delay: reduced ? 0 : 0.18, ease: "easeInOut" }}
            />
          </svg>

          {navModel.map((w, i) => {
            const pos = positions[i];
            const isActive = i === previewIdx;
            const xPct = (pos.x / STAGE_W) * 100;
            const yPct = (pos.y / STAGE_H) * 100;
            return (
              <motion.div
                key={w.id}
                initial={{ opacity: reduced ? 1 : 0, scale: reduced ? 1 : 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: reduced ? 0 : 0.32,
                  delay: reduced ? 0 : 0.32 + i * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: "absolute",
                  left: `${xPct}%`,
                  top: `${yPct}%`,
                }}
              >
                <WaypointButton
                  active={isActive}
                  type="button"
                  aria-current={isActive ? "location" : undefined}
                  aria-label={labels[w.labelKey].label}
                  onMouseEnter={() => setPreviewIdx(i)}
                  onFocus={() => setPreviewIdx(i)}
                  onClick={() => navigate(i)}
                >
                  <svg width="22" height="22" viewBox="0 0 24 24">
                    {iconPath(w.icon)}
                  </svg>
                  <WaypointLabel active={isActive}>
                    {labels[w.labelKey].label}
                  </WaypointLabel>
                </WaypointButton>
              </motion.div>
            );
          })}
        </div>
      </PathStage>

      <PanelAside aria-live="polite">
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.72rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: betaniaColors.gold,
            margin: 0,
          }}
          id="path-nav-sub"
        >
          {t.pathNav.subtitle}
        </p>
        <AnimatePresence mode="wait">
          <motion.div
            key={previewWaypoint.id}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <PanelTitle>{title}</PanelTitle>
            <PanelMicrocopy>{micro}</PanelMicrocopy>
            {ctaLabel && (
              <PanelCta onClick={() => navigate(previewIdx)}>
                {ctaLabel}
              </PanelCta>
            )}
          </motion.div>
        </AnimatePresence>
      </PanelAside>

      <PanelBottomSheet aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={previewWaypoint.id}
            initial={{ opacity: 0, y: reduced ? 0 : 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: reduced ? 0 : -8 }}
            transition={{ duration: reduced ? 0 : 0.22 }}
            style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: betaniaColors.gold,
                margin: 0,
              }}
            >
              {t.pathNav.subtitle}
            </p>
            <PanelTitle style={{ fontSize: "1.6rem" }}>{title}</PanelTitle>
            <PanelMicrocopy>{micro}</PanelMicrocopy>
            {ctaLabel && (
              <PanelCta onClick={() => navigate(previewIdx)}>
                {ctaLabel}
              </PanelCta>
            )}
          </motion.div>
        </AnimatePresence>
      </PanelBottomSheet>
    </OverlayRoot>
  );
}
