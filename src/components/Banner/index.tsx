import { BannerCard, CampoTexto } from './styles'
import Particles from '../../Particles'

const Banner = () => (
  <>
    <BannerCard>
      <Particles />
      <CampoTexto>
        <h5>Portfólio</h5>
        <h1>Icaro Natã Fadel</h1>
        <p>
          Desenvolvedor Full Stack <span>Java</span>
        </p>
      </CampoTexto>
    </BannerCard>
  </>
)

export default Banner
