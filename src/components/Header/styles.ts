import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-left: 0;
    display: block;
  }
`

export const HeaderBar = styled.header`
  background-color: #000;
  color: ${cores.white};
  font-weight: bold;
  padding: 24px;
  border-radius: 0 0 16px 16px;
  position: fixed;
  width: 100%;

  a {
    color: ${cores.white};
  }
`

export const HeaderRow = styled.div`
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;

      ${Links} {
        display: none;
      }
    }
  }
`

export const LinkItem = styled.li`
  margin-right: 16px;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 16px 0;
      text-align: center;
    }
  }
`
export const MenuHamburguer = styled.div`
  width: 32px;
  display: block;

  span {
    height: 2px;
    display: block;
    width: 100%;
    margin: 8px;
    background-color: ${cores.white};
    margin-bottom: 4px;
    transition: 0.4s;

    &.line1 {
      transform: rotate(-45deg) translate(-8px, 8px);
    }

    &.line2 {
      opacity: 0;
    }

    &.line3 {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    display: none;
  }
`
export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`
