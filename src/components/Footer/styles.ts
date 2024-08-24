import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.black};
  padding: 32px;
  margin-top: 32px;

  > div {
    display: flex;
    justify-content: center;
  }
`
