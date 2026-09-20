import { Footer, FloatWhats, Header } from "@/components/chrome";
import {
  Cases,
  Contact,
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
        <Cases />
        <Method />
        <Partners />
        <Contact />
      </main>
      <Footer />
      <FloatWhats />
    </>
  );
}
