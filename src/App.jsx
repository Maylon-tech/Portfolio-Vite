import About from "./components/About"
import Hero from "./components/Hero"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"

const Home = () => {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  )
}


export default Home