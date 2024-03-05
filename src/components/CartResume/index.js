import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { Button } from '../Button'
import { Container } from './style'

export function CartResume() {
  const [finalPrice, setfinalPrice] = useState(0)
  const [deliveryTax] = useState(5)

  const { cardProducts } = useCart()

  useEffect(() => {
    const sumAllItems = cardProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setfinalPrice(sumAllItems)
  }, [cardProducts, deliveryTax])

  const submitOrder = async () => {
    const order = cardProducts.map(products => {
      return { id: products.id, quantity: products.quantity }
    })

    await toast.promise(api.post('orders', { products: order }), {
      pending: 'Realizando o seu pedido',
      success: 'Pedido realizado com sucesso',
      error: 'Flaha ao tentar realizar o seu pedido, tente novamente.'
    })
  }
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do pedido</h2>
          <p className="items">Items</p>
          <p className="items-price">{formatCurrency(finalPrice)}</p>
          <p className="delivery-tex">Taxa de entrega</p>
          <p className="delivery-price-tex">{formatCurrency(deliveryTax)}</p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>{formatCurrency(finalPrice + deliveryTax)}</p>
        </div>
      </Container>
      <Button style={{ width: '100%', marginTop: 30 }} onClick={submitOrder}>
        Finalizar Pedido
      </Button>
    </div>
  )
}
