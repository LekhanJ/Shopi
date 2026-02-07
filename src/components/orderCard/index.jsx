import { X } from 'lucide-react'

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props
  let renderXIcon
  
  if (handleDelete) {
    renderXIcon = <X onClick={() => handleDelete(id)} className='h-6 w-6 text-black cursor-pointer'></X>
  }

  return (
    <div className="flex justify-between items-center mb-3">
      <div className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imageUrl} alt={title} />
        </figure>
        <p className='text-sm font-light w-32 truncate'>{title}</p>
      </div>
      <div className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
        {renderXIcon}
      </div>
    </div>
  )
}

export default OrderCard