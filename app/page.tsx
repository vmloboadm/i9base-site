import { BackToTop, Footer, FloatWhats, Header } from "@/components/chrome";
import {
  Cases,
  Contact,
  Convites,
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
        <Method />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatWhats />
      <BackToTop />
    </>
  );
}
