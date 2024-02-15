import React, { useEffect, useState } from 'react'

import ProductLogo from '../../assets/product.png'
import CardProduct from '../../components/CardProduct'
import api from '../../services/api'
import {
  Container,
  ProductImg,
  CategoryButton,
  CategoriesMenu,
  ProductsContainer
} from './style'

function Product() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)
  useEffect(() => {
    async function loadCategories() {
      const { data } = await api.get('categories')

      const newCategories = [{ id: 0, name: 'Todas' }, ...data]

      setCategories(newCategories)
    }

    loadCategories()

    async function loadProducts() {
      const { data } = await api.get('products')

      console.log(data)
      setProducts(data)
    }

    loadProducts()
  }, [])

  return (
    <Container>
      <ProductImg src={ProductLogo} alt="logo do home" />
      <CategoriesMenu>
        {categories &&
          categories.map(category => (
            <CategoryButton
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
      </CategoriesMenu>
      <ProductsContainer>
        <CardProduct />
      </ProductsContainer>
    </Container>
  )
}

export default Product
