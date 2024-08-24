import Banner from './components/Banner'
import Header from './components/Header'
import About from './components/About'
import { GlobalCss } from './styles'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <About />
      <Projects />
      <Footer />
    </>
  )
}

export default App
