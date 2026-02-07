import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { ShoppingCartContext } from '../../context'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/config'

const Navbar = () => {
  const context = useContext(ShoppingCartContext)
  const activeStyle = 'underline underline-offset-4'

  const handleSignOut = () => {
    signOut(auth)
    context.setCartProducts([])
    context.setCount(0)
  }

  const renderRightSide = () => {
    if (context.user) {
      return (
        <>
          <li className='text-black/60'>{context.user.email}</li>
          <li><NavLink to='/my-orders' className={({ isActive }) => isActive ? activeStyle : undefined}>My Orders</NavLink></li>
          <li><NavLink to='/my-account' className={({ isActive }) => isActive ? activeStyle : undefined}>My Account</NavLink></li>
          <li onClick={handleSignOut} className='cursor-pointer'>Sign Out</li>
          <li className='flex items-center cursor-pointer' onClick={context.openCheckoutSideMenu}>
            <ShoppingBag className='h-5 w-5 text-black mr-1'></ShoppingBag> 
            <div>{context.count}</div>
          </li>
        </>
      )
    } else {
      return (
        <li>
          <NavLink to='/sign-in' className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
      )
    }
  }

  return (
    <nav className='flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light bg-white border-b'>
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'><NavLink to='/'>Shopi</NavLink></li>
        <li><NavLink to='/' onClick={() => context.setSearchByCategory()} className={({ isActive }) => isActive ? activeStyle : undefined}>All</NavLink></li>
        <li><NavLink to='/clothes' onClick={() => context.setSearchByCategory('clothes')} className={({ isActive }) => isActive ? activeStyle : undefined}>Clothes</NavLink></li>
        <li><NavLink to='/electronics' onClick={() => context.setSearchByCategory('electronics')} className={({ isActive }) => isActive ? activeStyle : undefined}>Electronics</NavLink></li>
        <li><NavLink to='/furnitures' onClick={() => context.setSearchByCategory('furniture')} className={({ isActive }) => isActive ? activeStyle : undefined}>Furnitures</NavLink></li>
        <li><NavLink to='/toys' onClick={() => context.setSearchByCategory('toys')} className={({ isActive }) => isActive ? activeStyle : undefined}>Toys</NavLink></li>
      </ul>
      <ul className='flex items-center gap-3'>
        {renderRightSide()}
      </ul>
    </nav>
  )
}
export default Navbar