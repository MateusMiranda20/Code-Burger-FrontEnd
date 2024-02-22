import React from 'react'

import { Button } from '../Button'
import { Container } from './style'

export function CartResume() {
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">R$ 10,00</p>
          <p className="delivery-tex">Taxa de entrega</p>
          <p className="delivery-price-tex">R$ 10,00</p>
        </div>
        <div>
          <p>Total</p>
          <p>R$ 20,00</p>
        </div>
      </Container>
      <Button>Finalizar Pedido</Button>
    </div>
  )
}
