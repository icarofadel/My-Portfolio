import styled from 'styled-components'

import fundo from '../../assets/images/fundo.jpg'
import { cores } from '../../styles'

export const BannerCard = styled.div`
  background: #151515 url(${fundo}) no-repeat center bottom;
  background-size: cover;
  background-attachment: fixed;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const CampoTexto = styled.div`
  text-align: center;
  color: ${cores.white};
  margin-top: 32px;

  h1 {
    font-size: 42px;
  }

  h5 {
    font-size: 1.5rem;
  }

  span {
    color: ${cores.red};
  }

  p {
    margin-top: 8px;
    padding: 8px;
    font-size: 1.2rem;
    white-space: nowrap;
    overflow: hidden;
    width: 26ch;
    animation: animaTexto steps(26) 3s infinite,
        animaMarcador 0.5s linear infinite;

      @keyframes animaMarcador {
        50% {
          border-right: 1px solid ${cores.white};
        }
      }

      @keyframes animaTexto {
        0% {
          width: 0;
        }
    }
  }
}
`
