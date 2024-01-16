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
  const breakPoints = [
    { width: 100, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 1000, itemsToShow: 4 }
  ]
  return (
    <Container>
      <CategoryImg src={Category} alt="logo do categoria" />

      <Carousel
        itemsToShow={4}
        style={{ width: '100%' }}
        breakPoints={breakPoints}
      >
        {categories &&
          categories.map(category => (
            <div key={category.id}>
              <img src={category.url} alt="foto da categoria" />
              <button>{category.name}</button>
            </div>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
