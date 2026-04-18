import { useEffect, useRef } from "react";

interface Leaf {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  size: number;
  alpha: number;
}

interface Props {
  active: boolean;
}

const LEAF_COUNT = 14;

export default function ParticlesOliveLeaves({ active }: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const leavesRef = useRef<Leaf[]>([]);
  const mouseRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    setSize();

    leavesRef.current = Array.from({ length: LEAF_COUNT }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -0.15 - Math.random() * 0.25,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.01,
      size: 6 + Math.random() * 8,
      alpha: 0.25 + Math.random() * 0.35,
    }));

    const onMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    const onResize = () => setSize();
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    const draw = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);
      for (const leaf of leavesRef.current) {
        const pull = (mouseRef.current.x - w / 2) / w;
        leaf.x += leaf.vx + pull * 0.08;
        leaf.y += leaf.vy;
        leaf.rot += leaf.vr;
        if (leaf.y < -20) {
          leaf.y = h + 20;
          leaf.x = Math.random() * w;
        }
        if (leaf.x < -20) leaf.x = w + 20;
        if (leaf.x > w + 20) leaf.x = -20;

        ctx.save();
        ctx.translate(leaf.x, leaf.y);
        ctx.rotate(leaf.rot);
        ctx.fillStyle = `rgba(200, 146, 42, ${leaf.alpha})`;
        ctx.beginPath();
        ctx.ellipse(0, 0, leaf.size, leaf.size * 0.35, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
      rafRef.current = requestAnimationFrame(draw);
    };
    rafRef.current = requestAnimationFrame(draw);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  if (!active) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 1,
      }}
    />
  );
}
