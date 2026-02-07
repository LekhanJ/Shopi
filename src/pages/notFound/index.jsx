import Layout from '../../components/layout'
import { Frown } from 'lucide-react'

function NotFound() {
  return (
    <Layout>
        <div className='flex flex-col items-center justify-center'>
            <Frown className='h-20 w-20 text-black mb-4' />
            <h1 className='font-medium text-xl'>Page Not Found</h1>
            <p className='text-gray-500 mt-2'>The page you are looking for doesn't exist.</p>
        </div>
    </Layout>
  )
}

export default NotFound