import React, { createContext, useContext, useEffect, useState } from 'react'

import ProTypes from 'prop-types'

const CardContext = createContext({})

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cardProducts, setCardProducts] = useState([])

  const putProductInCart = async products => {
    const cartIndex = cardProducts.findIndex(prd => prd.id === products.id)

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cardProducts

      newCartProducts[cartIndex].quantity =
        newCartProducts[cartIndex].quantity + 1

      setCardProducts(newCartProducts)
    } else {
      products.quantity = 1
      newCartProducts = [...cardProducts, products]
      setCardProducts(newCartProducts)
    }

    await localStorage.setItem(
      'codeburger:cartInfo',
      JSON.stringify(newCartProducts)
    )
  }

  useEffect(() => {
    const loadUserData = async () => {
      const clientCartData = await localStorage.getItem('codeburger:cartInfo')

      if (clientCartData) {
        setCardProducts(JSON.parse(clientCartData))
      }
    }

    loadUserData()
  }, [])

  return (
    <CardContext.Provider value={{ putProductInCart, cardProducts }}>
      {children}
    </CardContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('useCart must be used with UserContext')
  }

  return context
}

CardContext.proTypes = {
  children: ProTypes.node
}
