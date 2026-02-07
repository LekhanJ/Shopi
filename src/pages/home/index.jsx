import { useContext, useEffect, useState } from 'react'
import { ShoppingCartContext } from '../../context/context'
import Layout from '../../components/layout'
import Card from '../../components/card'
import ProductDetail from '../../components/productDetail'

function Home() {
  const context = useContext(ShoppingCartContext)
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      context.setSearchByTitle(inputValue)
    }, 500)

    return () => clearTimeout(timeoutId)
  }, [context, inputValue])

  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return (context.filteredItems.map(item => (<Card key={item.id} data={item} />)))
    } else {
      return (<div>We don't have anything :(</div>)
    }
  }

  return (
    <Layout>
      <div className='flex items-center justify-center relative w-80 mb-4'>
        <h1 className='font-medium text-xl'>Home</h1>
      </div>
      <input
        type="text"
        placeholder='Search a product'
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)} /> 
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {renderView()}
      </div>
      <ProductDetail />
    </Layout>
  )
}
export default Home