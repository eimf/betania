import type { Translations } from "../../i18n/types";

export type WaypointId =
  | "hero"
  | "horarios"
  | "que-esperar"
  | "conserjeria"
  | "historia"
  | "ministerios"
  | "bautismos"
  | "conectar"
  | "donaciones"
  | "contacto";

export interface Waypoint {
  id: WaypointId;
  labelKey: keyof Translations["pathNav"]["waypoints"];
  icon: "home" | "clock" | "door" | "heart" | "scroll" | "people" | "water" | "play" | "gift" | "pray";
  ctaTarget?: string;
}

export const navModel: Waypoint[] = [
  { id: "hero", labelKey: "hero", icon: "home" },
  { id: "horarios", labelKey: "horarios", icon: "clock" },
  { id: "que-esperar", labelKey: "queEsperar", icon: "door" },
  { id: "conserjeria", labelKey: "conserjeria", icon: "heart" },
  { id: "historia", labelKey: "historia", icon: "scroll" },
  { id: "ministerios", labelKey: "ministerios", icon: "people" },
  { id: "bautismos", labelKey: "bautismos", icon: "water" },
  { id: "conectar", labelKey: "conectar", icon: "play" },
  { id: "donaciones", labelKey: "donaciones", icon: "gift" },
  { id: "contacto", labelKey: "contacto", icon: "pray", ctaTarget: "contacto" },
];
