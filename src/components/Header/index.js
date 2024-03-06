import React from 'react'
import { useNavigate } from 'react-router-dom'

import Cart from '../../assets/carrinho.png'
import Person from '../../assets/pessoa.png'
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
  const navigate = useNavigate()
  return (
    <Container>
      <ContainerLeft>
        <PageLink onClick={() => navigate('/')}>Home</PageLink>
        <PageLink onClick={() => navigate('/produtos')}>Ver Produtos</PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink>
          <img src={Cart} alt="Carrinho" />
        </PageLink>
        <Line></Line>
        <PageLink>
          <img src={Person} alt="Pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá mateus</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
