import React from 'react'

import CartLogo from '../../assets/cardCarrinho.png'
import { CartItems } from '../../components'
import { Container, CartImg } from './style'

export function Cart() {
  return (
    <Container>
      <CartImg src={CartLogo} alt="logo do Cart" />
      <CartItems />
    </Container>
  )
}
