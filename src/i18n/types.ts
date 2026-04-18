interface ServiceItem {
  title: string;
  day: string;
  time: string;
  description: string;
}

interface TextItem {
  title: string;
  text: string;
}

interface DonationMethod {
  title: string;
  text: string;
  comingSoon?: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface ThumbItem {
  title: string;
  meta: string;
}

interface PostItem {
  text: string;
  meta: string;
}

export interface Translations {
  nav: {
    brand: string;
    horarios: string;
    queEsperar: string;
    conserjeria: string;
    historia: string;
    ministerios: string;
    bautismos: string;
    conectar: string;
    donaciones: string;
    contacto: string;
    cta: string;
    closeMenu: string;
    openMenu: string;
  };
  hero: {
    badge: string;
    title1: string;
    title2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    scroll: string;
  };
  serviceTimes: {
    label: string;
    title: string;
    subtitle: string;
    directions: string;
    services: ServiceItem[];
  };
  whatToExpect: {
    label: string;
    title: string;
    subtitle: string;
    items: TextItem[];
  };
  conserjeria: {
    label: string;
    title: string;
    subtitle: string;
    cards: TextItem[];
    cta: string;
    formName: string;
    formContact: string;
    formMessage: string;
    formSubmit: string;
    formSuccess: string;
  };
  story: {
    label: string;
    title: string;
    narrative1: string;
    narrative2: string;
    verse: string;
    verseRef: string;
    pills: string[];
  };
  ministries: {
    label: string;
    title: string;
    subtitle: string;
    learnMore: string;
    items: { title: string; description: string }[];
  };
  baptisms: {
    label: string;
    title: string;
    subtitle: string;
    whatIs: TextItem;
    whoCan: TextItem;
    nextSteps: TextItem;
    cta: string;
    formName: string;
    formAge: string;
    formContact: string;
    formQuestions: string;
    formLeader: string;
    formSubmit: string;
    formSuccess: string;
  };
  watchConnect: {
    label: string;
    title: string;
    subtitle: string;
    subscribe: string;
    follow: string;
    ytThumbs: ThumbItem[];
    fbPosts: PostItem[];
  };
  donations: {
    label: string;
    title: string;
    subtitle: string;
    methods: DonationMethod[];
    whereItGoes: {
      title: string;
      items: string[];
    };
    faq: FaqItem[];
    ctaPrimary: string;
    faqTitle: string;
  };
  prayerContact: {
    label: string;
    title: string;
    subtitle: string;
    formName: string;
    formContact: string;
    formMessage: string;
    formPrayer: string;
    formSubmit: string;
    formSuccess: string;
  };
  footer: {
    brand: string;
    brandText: string;
    links: string;
    schedules: string;
    contact: string;
    copyright: string;
  };
}
