import React from 'react'

import ProductLogo from '../../assets/product.png'
import { Container, ProductImg } from './style'

function Product() {
  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo do home" />
    </Container>
  )
}

export default Product
