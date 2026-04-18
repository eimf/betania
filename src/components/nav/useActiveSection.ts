import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio || 0.001);
          } else {
            visible.delete(entry.target.id);
          }
        }
        if (visible.size === 0) return;
        let bestId = "";
        let bestY = Infinity;
        for (const id of visible.keys()) {
          const el = document.getElementById(id);
          if (!el) continue;
          const top = el.getBoundingClientRect().top;
          if (top >= -window.innerHeight && top < bestY) {
            bestY = top;
            bestId = id;
          }
        }
        if (bestId) setActive(bestId);
      },
      {
        root: null,
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.1, 0.5, 1],
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [ids.join(",")]);

  return active;
}
