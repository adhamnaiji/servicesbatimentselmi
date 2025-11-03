"use client";

import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ContactPill from "@/components/contact-pill";
import SplashScreen from "@/components/splash-screen";

export default function Home() {
  return (
    <SplashScreen>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ContactPill />
    </SplashScreen>
  );
}
