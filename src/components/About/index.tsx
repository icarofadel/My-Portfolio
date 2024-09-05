import { Card } from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'
import perfil from '../../assets/images/perfil.png'

AOS.init()

const About = () => {
  return (
    <div className="container">
      <Card id="sobre" data-aos="fade-up-right">
        <img src={perfil} alt="" />
        <div>
          <h4>Quem sou eu?</h4>
          <h3>Icaro Fadel</h3>
          <p>
            Me chamo Icaro Natã Fadel e sou um profissional atuante na área de
            seguros em uma grande transportadora em Guarulhos, SP. Iniciei minha
            carreira como aprendiz e, atualmente, sou responsável pelos seguros
            de diversos ramos em toda a corporação. Sempre fui muito curioso e
            apaixonado por tecnologia, o que me levou a migrar para a área de
            TI. Em 2022, comecei a aprender programação por conta própria e
            desenvolvi meus primeiros projetos. Hoje, busco uma oportunidade na
            área de desenvolvimento full stack Java para aprofundar meus
            conhecimentos e contribuir de forma mais ativa na comunidade de
            tecnologia. Passo meu tempo livre jogando e sou apaixonado por
            hardware
          </p>
        </div>
      </Card>
    </div>
  )
}
export default About
