import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Navigation from "@/components/navigation"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  )
}

