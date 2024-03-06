import React from 'react'

import HomeLogo from '../../assets/burger-main.png'
import { CategoryCarousel, Header, OffersCarousel } from '../../components'
import { Container, HomeImg } from './style'

export function Home() {
  return (
    <Container>
      <Header />
      <HomeImg src={HomeLogo} alt="logo do home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}
