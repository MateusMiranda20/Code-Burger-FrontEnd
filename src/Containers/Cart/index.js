import React from 'react'

import CartLogo from '../../assets/cardCarrinho.png'
import { CartItems, CartResume } from '../../components'
import { Container, CartImg, Wrapper } from './style'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do Cart" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
