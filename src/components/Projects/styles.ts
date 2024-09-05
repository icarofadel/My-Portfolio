import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

type TypeButton = {
  buttonType: 'buttonSite' | 'buttonRep'
}

export const Title = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 16px;
`
export const ListProjects = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr;
  }
`
export const ProjectsItem = styled.li`
  padding: 8px;
  display: flex;
  border: 2px solid #1f1f1f;
  background-color: #151515;

  img {
    width: 200px;
    margin-right: 8px;
    object-fit: cover;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: block;

    img {
      width: 100%;
    }
  }
`
export const Description = styled.div`
  padding: 8px;

  h4 {
    text-align: center;
  }

  p {
    margin: 8px 0;
    text-align: justify;
  }
`
export const CampoButton = styled.div`
  display: flex;
  justify-content: space-between;
`
export const ButtonLink = styled.a<TypeButton>`
  font-size: 16px;
  padding: 8px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) =>
    props.buttonType === 'buttonSite' ? `${cores.red}` : `${cores.cinza}`};
  color: ${cores.white};
  font-weight: bold;
`
