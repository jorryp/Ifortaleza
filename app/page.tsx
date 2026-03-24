import Hero from "./components/Hero";
import PlanMyNight from "./components/PlanMyNight";
import {
  LiveBar, MoneyBlock, ModeStrip, QuickDecision, PriceSnapshot,
} from "./components/LiveSections";
import {
  QuickCats, AdRibbon, WhatsHot, EditorialGrid, Sponsors,
  BotecosSection, BarracasSection, EventsSection, Top10Section,
  AwardsSection, WebcamsSection, SafetyStrip, HotelsSection,
  WhyFortaleza, MagazineSection, ScrollTrap, AdvertiseSection,
  PressSection, AdSenseSlot,
} from "./components/Sections";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickCats />
      <LiveBar />
      <MoneyBlock />
      <ModeStrip />
      <QuickDecision />
      <AdRibbon />
      <WhatsHot />
      <PriceSnapshot />
      <AdSenseSlot />
      <PlanMyNight />
      <EditorialGrid />
      <Sponsors />
      <BotecosSection />
      <BarracasSection />
      <EventsSection />
      <Top10Section />
      <AwardsSection />
      <WebcamsSection />
      <SafetyStrip />
      <WhyFortaleza />
      <HotelsSection />
      <MagazineSection />
      <ScrollTrap />
      <AdvertiseSection />
      <PressSection />
    </main>
  );
}
