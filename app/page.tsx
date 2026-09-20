import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import {
  Artes,
  Cases,
  Contact,
  Convites,
  Diferencial,
  Hero,
  Method,
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
