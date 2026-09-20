import { BackToTop, Footer, FloatWhats, Header, StickyCta } from "@/components/chrome";
import {
  Artes,
  Cases,
  Contact,
  Convites,
  CrmSection,
  Diferencial,
  Hero,
  Method,
  OfferStrip,
  Partners,
  Solutions,
  StripStats,
  Faq,
  FinalCta,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfferStrip />
        <StripStats />
        <Solutions />
        <CrmSection />
        <Convites />
        <Cases />
        <Artes />
        <Method />
        <Diferencial />
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
