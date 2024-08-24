import { RedeSociais, SectionContact } from './styles'

import gmail from '../../assets/images/gmail.png'
import git from '../../assets/images/git.png'
import linkedin from '../../assets/images/linkedin.png'

const Contact = () => (
  <div className="container">
    <SectionContact>
      <h1>Contato</h1>
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
