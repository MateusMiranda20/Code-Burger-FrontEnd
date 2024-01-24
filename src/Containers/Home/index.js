import React from 'react'

import HomeLogo from '../../assets/burger-main.png'
import CategoryCarousel from '../../components/CategoryCarousel'
import OffersCarousel from '../../components/OffersCarousel'
import { Container, HomeImg } from './style'

function Home() {
  return (
    <Container>
      <HomeImg src={HomeLogo} alt="logo do home" />
      <CategoryCarousel />
      <OffersCarousel />
    </Container>
  )
}

export default Home
