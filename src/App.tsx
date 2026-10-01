import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
import {
  About,
  Experience,
  Lab,
  Services,
  Skills,
  Stats,
} from "@/components/Sections"

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Stats />
        <Experience />
        <Services />
        <Lab />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
