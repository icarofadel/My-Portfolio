import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Card = styled.div`
  margin: 32px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  height: 100%;
  background-color: #151515;
  border: 2px solid #1f1f1f;

  h3 {
    margin: 8px 0;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
  }

  div {
    margin-left: 32px;
    text-align: justify;

    @media (max-width: ${breakpoints.tablet}) {
      margin: 16px;
    }
  }
`
