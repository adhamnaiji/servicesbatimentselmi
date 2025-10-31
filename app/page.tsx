import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ContactPill from "@/components/contact-pill"

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
      <Footer />
      <ContactPill />
    </>
  )
}
