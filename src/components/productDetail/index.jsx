import { useContext } from 'react'
import { X } from 'lucide-react'
import { ShoppingCartContext } from '../../context/context'

const ProductDetail = () => {
  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${
        context.isProductDetailOpen ? 'flex' : 'hidden'
      } product-detail flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] h-[calc(100vh-68px)] top-[68px] z-20`}
    >
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div 
            className='cursor-pointer' 
            onClick={() => context.closeProductDetail()}>
            <X className='h-6 w-6 text-black' />
        </div>
      </div>
      
      <div className='flex flex-col overflow-y-auto px-6 pb-6'>
        <figure className='px-6'>
          <img
            className='w-full h-full rounded-lg object-cover'
            src={context.productToShow.images?.[0]}
            alt={context.productToShow.title}
          />
        </figure>
        <p className='flex flex-col p-6'>
          <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
          <span className='font-medium text-md'>${context.productToShow.title}</span>
          <span className='font-light text-sm mt-1'>{context.productToShow.description}</span>
        </p>
      </div>
    </aside>
  )
}

export default ProductDetail