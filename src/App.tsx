import Banner from './components/Banner'
import Header from './components/Header'
import Sections from './components/Sections'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <Banner />
      <Sections />
    </>
  )
}

export default App
