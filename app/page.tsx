import { BackToTop, Footer, FloatWhats, Header, StickyCta } from "@/components/chrome";
import {
  Artes,
  Cases,
  Contact,
  Convites,
  CrmSection,
  Diferencial,
  ValoresBase,
  Escada,
  Hero,
  Method,
  OfferStrip,
  Partners,
  Solutions,
  StripStats,
  TechStrip,
  Faq,
  FinalCta,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TechStrip />
        <OfferStrip />
        <StripStats />
        <Solutions />
        <CrmSection />
        <Convites />
        <Cases />
        <Artes />
        <Method />
        <Escada />
        <Diferencial />
        <ValoresBase />
        <Partners />
        <Contact />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatWhats />
      <StickyCta />
      <BackToTop />
    </>
  );
}
