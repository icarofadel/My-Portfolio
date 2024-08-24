import { useState } from 'react'
import {
  HeaderBar,
  HeaderRow,
  LinkItem,
  Links,
  MenuHamburguer,
  NavMobile
} from './styles'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <HeaderBar>
      <HeaderRow>
        <div>
          <h1>Portfólio</h1>
          <div>
            <MenuHamburguer onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className={isMenuOpen ? 'line1' : ''}></span>
              <span className={isMenuOpen ? 'line2' : ''}></span>
              <span className={isMenuOpen ? 'line3' : ''}></span>
            </MenuHamburguer>
          </div>
          <nav>
            <Links>
              <LinkItem>
                <a href="#sobre">Sobre mim</a>
              </LinkItem>
              <LinkItem>
                <a href="#skills">Habilidades</a>
              </LinkItem>
              <LinkItem>
                <a href="#projetos">Projetos</a>
              </LinkItem>
              <LinkItem>
                <a href="#contato">Contato</a>
              </LinkItem>
            </Links>
          </nav>
        </div>
      </HeaderRow>
      <NavMobile className={isMenuOpen ? 'is-open' : ''}>
        <Links>
          <LinkItem>
            <a href="#sobre">Sobre mim</a>
          </LinkItem>
          <LinkItem>
            <a href="#skills">Habilidades</a>
          </LinkItem>
          <LinkItem>
            <a href="#projetos">Projetos</a>
          </LinkItem>
          <LinkItem>
            <a href="#contato">Contato</a>
          </LinkItem>
        </Links>
      </NavMobile>
    </HeaderBar>
  )
}

export default Header
