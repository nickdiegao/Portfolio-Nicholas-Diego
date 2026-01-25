import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'

import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Skills from './sections/Skills'
import Experience from './sections/Experience'

function App() {

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--text-primary)]">
      <Header />

      <main className='pt-24'>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
