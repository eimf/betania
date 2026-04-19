import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import NewHereSection from "../components/NewHereSection";
import ServiceTimes from "../components/ServiceTimes";
import WhatToExpect from "../components/WhatToExpect";
import Conserjeria from "../components/Conserjeria";
import StorySection from "../components/StorySection";
import Ministries from "../components/Ministries";
import Bautismos from "../components/Bautismos";
import WatchConnect from "../components/WatchConnect";
import Donaciones from "../components/Donaciones";
import PrayerContact from "../components/PrayerContact";

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  if (!id) return;
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    let cancelled = false;
    const run = () => {
      if (!cancelled) scrollToHash(location.hash);
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(run));
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [location.hash, location.key]);

  return (
    <main>
      <Hero />
      <NewHereSection />
      <ServiceTimes />
      <WhatToExpect />
      <Conserjeria />
      <StorySection />
      <Ministries />
      <Bautismos />
      <WatchConnect />
      <Donaciones />
      <PrayerContact />
    </main>
  );
}
