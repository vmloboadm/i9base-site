import { BackToTop, Footer, FloatWhats, Header, StickyCta } from "@/components/chrome";
import {
  Artes,
  Cases,
  Contact,
  Convites,
  CrmSection,
  Diferencial,
  Escada,
  Hero,
  Method,
  OfferStrip,
  Partners,
  Solutions,
  TechStrip,
  Faq,
  FinalCta,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <TechStrip />
        <OfferStrip />
        <Solutions />
        <CrmSection />
        <Convites />
        <Cases />
        <Artes />
        <Method />
        <Escada />
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
