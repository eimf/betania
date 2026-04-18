import { betaniaGlobalStyles } from "./theme/betaniaTheme";
import Navbar from "./components/nav/Navbar";
import Hero from "./components/Hero";
import ServiceTimes from "./components/ServiceTimes";
import WhatToExpect from "./components/WhatToExpect";
import Conserjeria from "./components/Conserjeria";
import StorySection from "./components/StorySection";
import Ministries from "./components/Ministries";
import Bautismos from "./components/Bautismos";
import WatchConnect from "./components/WatchConnect";
import Donaciones from "./components/Donaciones";
import PrayerContact from "./components/PrayerContact";
import Footer from "./components/Footer";

betaniaGlobalStyles();

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
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
      <Footer />
    </>
  );
}

export default App;
