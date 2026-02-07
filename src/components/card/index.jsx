import { useContext } from 'react'
import { Plus, Check } from 'lucide-react'
import { ShoppingCartContext } from '../../context'
import PropTypes from 'prop-types'

const Card = (data) => {
  const context = useContext(ShoppingCartContext)

  const showProduct = (productDetail) => {
    context.openProductDetail()
    context.setProductToShow(productDetail)
    context.closeCheckoutSideMenu()
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setCartProducts([...context.cartProducts, productData])
    context.openCheckoutSideMenu()
    context.closeProductDetail()
  }

  const renderIcon = (id) => {
    const isInCart = context.cartProducts.some(product => product.id === id)
    if (isInCart) {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
          <Check className='text-white w-4 h-4'></Check>
        </div>
      )
    } else {
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={(event) => addProductsToCart(event, data.data)}>
          <Plus className='w-4 h-4'></Plus>
        </div>
      )
    }
  }

  return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() => showProduct(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{data.data.category.name}</span>
        <img className='w-full h-full object-cover rounded-lg' src={data.data.images[0]} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between items-center'>
        <span className='text-sm font-light truncate mr-2'>{data.data.title}</span>
        <span className='text-lg font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}
Card.propTypes = { data: PropTypes.object.isRequired }
export default Card