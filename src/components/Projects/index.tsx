import AOS from 'aos'
import 'aos/dist/aos.css'
import {
  ListProjects,
  Title,
  ProjectsItem,
  Description,
  CampoButton,
  ButtonLink
} from './styles'

import effod from '../../assets/images/efood.jpg'
import agenda from '../../assets/images/agendaReact.png'
import aniver from '../../assets/images/landingpageEvent.png'
import walle from '../../assets/images/walle.png'

AOS.init()

const Projects = () => (
  <div className="container" id="projetos">
    <div data-aos="flip-right">
      <Title>
        <h2>Projetos</h2>
      </Title>

      <ListProjects>
        <ProjectsItem>
          <img src={effod} alt="app efood" />
          <Description>
            <h5>Aplicativo Effod</h5>
            <p>
              Aplicativo de uma empresa fictícia utilizando React, HookForm,
              Yup, Mask e retornando o número do pedido com uma API. Projeto
              valendo nota pela EBAC.
            </p>
            <CampoButton>
              <ButtonLink
                buttonType="buttonSite"
                href="https://app-efood.vercel.app/"
              >
                Visitar Site
              </ButtonLink>
              <ButtonLink
                buttonType="buttonRep"
                href="https://github.com/icarofadel/app_efood"
              >
                &lt;Repositorio/&gt;
              </ButtonLink>
            </CampoButton>
          </Description>
        </ProjectsItem>

        <ProjectsItem>
          <img src={agenda} alt="Agenda de contato" />
          <Description>
            <h5>Agenda de contato com React</h5>
            <p>
              Agenda de contato utilizando React e Redux. Projeto valendo nota
              pela EBAC.Valendo nota pela EBAC.
            </p>
            <CampoButton>
              <ButtonLink
                buttonType="buttonSite"
                href="https://projeto-agenda-contato.vercel.app/"
              >
                Visitar Site
              </ButtonLink>
              <ButtonLink
                buttonType="buttonRep"
                href="https://github.com/icarofadel/projeto-agenda-contato"
              >
                &lt; Repositorio /&gt;
              </ButtonLink>
            </CampoButton>
          </Description>
        </ProjectsItem>

        <ProjectsItem>
          <img src={aniver} alt="Landing page - Evento de aniversário" />
          <Description>
            <h5>Landing page - Evento de aniversário</h5>
            <p>
              Landing page de um aniversário utilizando HTML, SCSS, JavaScript e
              com algumas animações. Projeto valendo nota pela EBAC.
            </p>
            <CampoButton>
              <ButtonLink
                buttonType="buttonSite"
                href="https://event-aniv.vercel.app/"
              >
                Visitar Site
              </ButtonLink>
              <ButtonLink
                buttonType="buttonRep"
                href="https://github.com/icarofadel/event_aniv"
              >
                &lt; Repositorio /&gt;
              </ButtonLink>
            </CampoButton>
          </Description>
        </ProjectsItem>

        <ProjectsItem>
          <img src={walle} alt="Clone Disney+ Filme Wall-e" />
          <Description>
            <h5>Clone Disney+ Filme Wall-e</h5>
            <p>
              Clone da Disney+ para testar algumas habilidades utilizando HTML,
              JavaScript e SCSS. Projeto valendo nota pela EBAC.
            </p>
            <CampoButton>
              <ButtonLink
                buttonType="buttonSite"
                href="https://disney-plus-wall-e.vercel.app/"
              >
                Visitar Site
              </ButtonLink>
              <ButtonLink
                buttonType="buttonRep"
                href="https://github.com/icarofadel/disney_plus_wall_e"
              >
                &lt; Repositorio /&gt;
              </ButtonLink>
            </CampoButton>
          </Description>
        </ProjectsItem>
      </ListProjects>
    </div>
  </div>
)

export default Projects
