import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/config'
import Layout from '../../components/layout'

function SignUp() {
  const navigate = useNavigate()
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignUp = async (e) => {
    e.preventDefault()
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      navigate('/') 
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <Layout>
      <div className="flex flex-col w-80">
        <h1 className='font-medium text-xl text-center mb-6'>Sign Up</h1>
        <form onSubmit={handleSignUp} className="flex flex-col gap-4">
          <input 
            type="email" 
            placeholder="Email" 
            className="border border-black p-2 rounded-lg"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="border border-black p-2 rounded-lg"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <span className="text-red-500 text-sm">{error}</span>}
          <button type="submit" className="bg-black text-white py-3 rounded-lg mt-2">
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? <a href="/sign-in" className="font-bold underline">Log In</a>
        </p>
      </div>
    </Layout>
  )
}
export default SignUp