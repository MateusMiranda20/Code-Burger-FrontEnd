import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

import Cart from '../../assets/carrinho.png'
import Person from '../../assets/pessoa.png'
import { useUser } from '../../hooks/UserContext'
import {
  Container,
  ContainerLeft,
  PageLink,
  ContainerRight,
  ContainerText,
  Line,
  PageLinkExit
} from './style'

export function Header() {
  const { logout } = useUser()

  const logoutUser = () => {
    logout()
    navigate('/login')
  }

  const location = useLocation()
  const { pathname } = location

  const navigate = useNavigate()

  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')} isActive={pathname === '/'}>
          Home
        </PageLink>
        <PageLink
          onClick={() => navigate('/produtos')}
          isActive={pathname.includes('produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => navigate('/carrinho')}>
          <img src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="Pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá mateus</p>
          <PageLinkExit onClick={logoutUser}>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
