import React from 'react'

import PropTypes from 'prop-types'

import { Button } from '../../components'
import { useCart } from '../../hooks/CartContext'
import { Container, Image, ProductName, ProductPrice } from './styles'

export function CardProduct({ products }) {
  const { putProductInCart } = useCart()
  return (
    <Container>
      <Image src={products.url} alt="Imagens dos produtos" />
      <div>
        <ProductName>{products.name}</ProductName>
        <ProductPrice>{products.formatedPrice}</ProductPrice>
        <Button onClick={() => putProductInCart(products)}>Adicionar</Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  products: PropTypes.object
}
