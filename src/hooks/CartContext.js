import React, { createContext, useContext, useEffect, useState } from 'react'

import ProTypes from 'prop-types'

const CardContext = createContext({})

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
  const [cardProducts, setCardProducts] = useState([])

  const updateLocalStoge = async product => {
    await localStorage.setItem('codeburger:cartInfo', JSON.stringify(product))
  }

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

    await updateLocalStoge(newCartProducts)
  }

  const deleteProducts = async productId => {
    const newCart = cardProducts.filter(products => products.id !== productId)

    setCardProducts(newCart)

    await updateLocalStoge(newCart)
  }

  const increaseProducts = async productId => {
    const newCart = cardProducts.map(products => {
      return products.id === productId
        ? { ...products, quantity: products.quantity + 1 }
        : products
    })
    setCardProducts(newCart)

    await updateLocalStoge(newCart)
  }

  const decreaseProducts = async productId => {
    const cartIndex = cardProducts.findIndex(pd => pd.id === productId)

    if (cardProducts[cartIndex].quantity > 1) {
      const newCart = cardProducts.map(products => {
        return products.id === productId
          ? { ...products, quantity: products.quantity - 1 }
          : products
      })
      setCardProducts(newCart)

      await updateLocalStoge(newCart)
    } else {
      deleteProducts(productId)
    }
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
    <CardContext.Provider
      value={{
        putProductInCart,
        cardProducts,
        increaseProducts,
        decreaseProducts
      }}
    >
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
