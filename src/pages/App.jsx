// IMPROT STYLE
import './styles/App.css'

import { Header, Footer } from '../components'
import { Home, About, Skills, Projects, Contact } from '../components/sections'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Home/>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}