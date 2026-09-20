import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import {
  Artes,
  Cases,
  Contact,
  Convites,
  Diferencial,
  Hero,
  Method,
  OfferStrip,
  Partners,
  Solutions,
  Strip,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OfferStrip />
        <Strip />
        <Solutions />
        <Convites />
        <Cases />
        <Artes />
        <Method />
        <Diferencial />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatWhats />
      <BackToTop />
    </>
  );
}
