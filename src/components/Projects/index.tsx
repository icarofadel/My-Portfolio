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
              Aplicativo de uma empresa ficticia utilizando React, HookForm,
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
          <img src={effod} alt="app efood" />
          <Description>
            <h5>Aplicativo Effod</h5>
            <p>
              Aplicativo de uma empresa ficticia utilizando React, HookForm,
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
                &lt; Repositorio /&gt;
              </ButtonLink>
            </CampoButton>
          </Description>
        </ProjectsItem>

        <ProjectsItem>
          <img src={effod} alt="app efood" />
          <Description>
            <h5>Aplicativo Effod</h5>
            <p>
              Aplicativo de uma empresa ficticia utilizando React, HookForm,
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
                &lt; Repositorio /&gt;
              </ButtonLink>
            </CampoButton>
          </Description>
        </ProjectsItem>

        <ProjectsItem>
          <img src={effod} alt="app efood" />
          <Description>
            <h5>Aplicativo Effod</h5>
            <p>
              Aplicativo de uma empresa ficticia utilizando React, HookForm,
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
