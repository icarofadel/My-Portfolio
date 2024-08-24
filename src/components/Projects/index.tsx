import {
  ListProjects,
  Title,
  ProjectsItem,
  Description,
  CampoButton,
  ButtonLink
} from './styles'

import effod from '../../assets/images/efood.jpg'

const Projects = () => (
  <div className="container">
    <Title>
      <h1>Projetos</h1>
    </Title>

    <ListProjects>
      <ProjectsItem>
        <img src={effod} alt="app efood" />
        <Description>
          <h5>Aplicativo Effod</h5>
          <p>
            Aplicativo de uma empresa ficticia utilizando React, HookForm, Yup,
            Mask e retornando o número do pedido com uma API. Projeto valendo
            nota pela EBAC.
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
            Aplicativo de uma empresa ficticia utilizando React, HookForm, Yup,
            Mask e retornando o número do pedido com uma API. Projeto valendo
            nota pela EBAC.
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
            Aplicativo de uma empresa ficticia utilizando React, HookForm, Yup,
            Mask e retornando o número do pedido com uma API. Projeto valendo
            nota pela EBAC.
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
            Aplicativo de uma empresa ficticia utilizando React, HookForm, Yup,
            Mask e retornando o número do pedido com uma API. Projeto valendo
            nota pela EBAC.
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
)

export default Projects
