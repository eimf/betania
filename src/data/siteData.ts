import { externalUrls } from "./links";

export const siteInfo = {
  name: "Iglesia Betania",
  address: "2100 Fir Ave W, McAllen, TX 78501",
  phone: "+1 (000) 000-0000",
  email: "contacto@iglesiabetania.org",
  youtube: "https://youtube.com/@IGLESIABETANIA",
  facebook: externalUrls.facebookPage,
};

/** Google Maps search for `siteInfo.address` (same as “Cómo llegar” / directions). */
export const googleMapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteInfo.address)}`;

export interface ServiceTime {
  id: string;
  title: string;
  day: string;
  time: string;
  description: string;
  icon: string;
}

export const serviceTimes: ServiceTime[] = [
  {
    id: "domingo",
    title: "Servicio Dominical",
    day: "Domingos",
    time: "11:00 AM CST",
    description: "Adoración, Palabra y comunión para toda la familia.",
    icon: "sun",
  },
  {
    id: "miercoles",
    title: "Estudio Bíblico",
    day: "Miércoles",
    time: "7:00 PM CST",
    description: "Profundizamos juntos en la Palabra de Dios.",
    icon: "book",
  },
  {
    id: "jovenes",
    title: "Jóvenes",
    day: "Viernes",
    time: "Consulta en sala",
    description: "Un espacio vibrante para la nueva generación.",
    icon: "star",
  },
  {
    id: "ninos",
    title: "Iglesia de Niños",
    day: "Domingos",
    time: "Durante el servicio",
    description: "Enseñanza creativa y segura para los más pequeños.",
    icon: "heart",
  },
];

export interface Ministry {
  id: string;
  title: string;
  description: string;
  color: string;
}

export const ministries: Ministry[] = [
  {
    id: "ninos",
    title: "Niños",
    description: "Formando corazones desde temprana edad con amor y creatividad.",
    color: "gold",
  },
  {
    id: "jovenes",
    title: "Jóvenes",
    description: "Una generación que adora, sirve y transforma su entorno.",
    color: "teal",
  },
  {
    id: "mujeres",
    title: "Mujeres",
    description: "Mujeres que se fortalecen juntas en fe y propósito.",
    color: "spark",
  },
  {
    id: "hombres",
    title: "Hombres",
    description: "Hombres de integridad, liderando con el ejemplo de Cristo.",
    color: "blue",
  },
  {
    id: "discipulado",
    title: "Discipulado",
    description: "Crecimiento espiritual paso a paso, en comunidad.",
    color: "green",
  },
  {
    id: "oracion",
    title: "Oración",
    description: "Intercesión y búsqueda del corazón de Dios.",
    color: "mustard",
  },
  {
    id: "servicio",
    title: "Servicio",
    description: "Manos dispuestas para bendecir a nuestra comunidad.",
    color: "orange",
  },
];

export const expectItems = [
  {
    title: "Ambiente cálido",
    text: "Desde el primer paso, serás recibido con una sonrisa genuina.",
  },
  {
    title: "Adoración viva",
    text: "Música que conecta el corazón con la presencia de Dios.",
  },
  {
    title: "Palabra relevante",
    text: "Mensajes prácticos y bíblicos para tu vida diaria.",
  },
  {
    title: "Iglesia de niños",
    text: "Un espacio seguro, divertido y lleno de enseñanza para tus hijos.",
  },
  {
    title: "Ven como eres",
    text: "No hay código de vestimenta. Ven cómodo y sé tú mismo.",
  },
  {
    title: "Comunidad real",
    text: "Personas reales caminando juntas en fe, esperanza y amor.",
  },
];
