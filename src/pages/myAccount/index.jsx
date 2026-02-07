import Layout from '../../components/layout'

function MyAccount() {
  return (
    <Layout>
      <div className='flex flex-col items-center justify-center w-80'>
         <h1 className='font-medium text-xl mb-6'>My Account</h1>
         <div className='border border-black rounded-lg w-full p-4 flex flex-col items-center'>
            <p className='text-md text-black'>Created By :</p>
            <div className='w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden'>
               <img 
                 src="public/me.jpeg" 
                 alt="avatar" 
                 className='w-full h-full object-cover'
               />
            </div>
            <p className='font-semibold'>Lekhan J</p>
         </div>
      </div>
    </Layout>
  )
}

export default MyAccount