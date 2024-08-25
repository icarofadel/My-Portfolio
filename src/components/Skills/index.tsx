import { ListSkills, SectionSkills } from './styles'
import AOS from 'aos'
import 'aos/dist/aos.css'

import html from '../../assets/images/html.png'
import css3 from '../../assets/images/css3.png'
import react from '../../assets/images/react.png'
import typescript from '../../assets/images/type.png'
import javascript from '../../assets/images/javascript.png'
import sass from '../../assets/images/sass.png'

AOS.init()

const Skills = () => (
  <div className="container">
    <SectionSkills id="skills" data-aos="flip-right">
      <h2>Conhecimentos/Skills</h2>

      <ListSkills>
        <img src={html} alt="" />
        <img src={css3} alt="" />
        <img src={javascript} alt="" />
        <img src={react} alt="" />
        <img src={typescript} alt="" />
        <img src={sass} alt="" />
      </ListSkills>
    </SectionSkills>
  </div>
)

export default Skills
