import AOS from 'aos'
import 'aos/dist/aos.css'
import { RedeSociais, SectionContact } from './styles'

import gmail from '../../assets/images/gmail.png'
import git from '../../assets/images/git.png'
import linkedin from '../../assets/images/linkedin.png'

AOS.init()

const Contact = () => (
  <div className="container">
    <SectionContact id="contato" data-aos="flip-up">
      <h2>Contato</h2>
      <RedeSociais>
        <li>
          <a href="mailto:icaro.nata147@gmail.com">
            <img src={gmail} alt="" />
          </a>
        </li>
        <li>
          <a href="https://github.com/icarofadel">
            <img src={git} alt="" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/icaro-fadel/">
            <img src={linkedin} alt="Linkedin" />
          </a>
        </li>
      </RedeSociais>
    </SectionContact>
  </div>
)

export default Contact
