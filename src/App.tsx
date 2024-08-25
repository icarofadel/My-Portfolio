import Banner from './components/Banner'
import Header from './components/Header'
import About from './components/About'
import { GlobalCss } from './styles'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App
