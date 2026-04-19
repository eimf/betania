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

export interface Translations {
  nav: {
    brand: string;
    live: string;
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
    headline: string;
    subheadline: string;
    ctaLive: string;
    ctaPlanVisit: string;
    ctaAbout: string;
    scroll: string;
    imageAlt: string;
  };
  newHere: {
    title: string;
    cards: {
      id: string;
      title: string;
      line: string;
    }[];
  };
  serviceTimes: {
    label: string;
    title: string;
    subtitle: string;
    scheduleSummary: string;
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
    titleLine1: string;
    titleLine2: string;
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
    pageBack: string;
    pageContactCta: string;
    items: { title: string; description: string }[];
    detailPages: { intro: string; paragraphs: string[] }[];
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
    youtubeComingSoon: string;
    facebookFollowLead: string;
    comingSoon: string;
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
