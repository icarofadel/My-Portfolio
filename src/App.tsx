import Banner from './components/Banner'
import Header from './components/Header'
import About from './components/About'
import { GlobalCss } from './styles'
import Projects from './components/Projects'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <About />
      <Projects />
    </>
  )
}

export default App
