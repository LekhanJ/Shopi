import { useState, useEffect, useMemo } from 'react'
import PropTypes from 'prop-types'
import { ShoppingCartContext } from './context'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../firebase/config'

export const ShoppingCartProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  const [count, setCount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])
  const [order, setOrder] = useState([])

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const [productToShow, setProductToShow] = useState({})

  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)
  const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false)

  const [items, setItems] = useState(null)
  const [searchByTitle, setSearchByTitle] = useState(null)
  const [searchByCategory, setSearchByCategory] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
      .then(response => response.json())
      .then(data => setItems(data))
  }, [])

  const filteredItems = useMemo(() => {
    let result = items

    if (searchByTitle) {
      result = result?.filter(item => 
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      )
    }

    if (searchByCategory) {
      result = result?.filter(item => 
        item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
      )
    }

    return result
  }, [items, searchByTitle, searchByCategory])

  return (
    <ShoppingCartContext.Provider value={{
      user, setUser, loading,
      count, setCount,
      openProductDetail, closeProductDetail, isProductDetailOpen,
      productToShow, setProductToShow,
      cartProducts, setCartProducts,
      isCheckoutSideMenuOpen, openCheckoutSideMenu, closeCheckoutSideMenu,
      order, setOrder,
      items, setItems,
      searchByTitle, setSearchByTitle,
      filteredItems,
      searchByCategory, setSearchByCategory
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

ShoppingCartProvider.propTypes = { children: PropTypes.node.isRequired }
export { ShoppingCartContext }