import React from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Header, Body, EmptyCart } from './style'

export function CartItems() {
  const { cardProducts } = useCart()
  return (
    <Container>
      <Header>
        <p></p>
        <p>Itens</p>
        <p>Preço</p>
        <p style={{ paddingRight: 41 }}>Quantidade</p>
        <p>Total</p>
      </Header>

      {cardProducts && cardProducts.length > 0 ? (
        cardProducts.map(products => (
          <Body key={products.id}>
            <img src={products.url} />
            <p>{products.name}</p>
            <p>{formatCurrency(products.price)}</p>
            <div className="quantity-container">
              <button>-</button>
              <p>{products.quantity}</p>
              <button>+</button>
            </div>
            <p>{formatCurrency(products.quantity * products.price)}</p>
          </Body>
        ))
      ) : (
        <EmptyCart>Carrinho vazio</EmptyCart>
      )}
    </Container>
  )
}
