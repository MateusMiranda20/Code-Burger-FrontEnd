import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import Category from '../../assets/categories.png'
import api from '../../services/api'
import { Container, CategoryImg } from './styles'

function CategoryCarousel() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])
  return (
    <Container>
      <CategoryImg src={Category} alt="logo do categoria" />

      <Carousel itemsToShow={4}>{categories.map}</Carousel>
    </Container>
  )
}

export default CategoryCarousel
