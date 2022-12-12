import React from 'react'
import { cartStore } from '../zustand'
import {Link} from 'react-router-dom'
import NavigationLink from './NavigationLink'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMultiply } from '@fortawesome/free-solid-svg-icons'

type Props = {}

const Navigation = (props: Props) => {

  const [mobileVis, setMobileVis] = React.useState<boolean>(false);

    const cart = cartStore((state) => state.cart);
  return (
    <>
    <nav className='z-10 h-10 lg:w-full bg-stone-100 flex flex-row lg:gap-4 items-center justify-between lg:justify-between text-sm'>
                <ul className='flex-none hidden ml-4 lg:flex flex-row gap-4 items-center'>
                <NavigationLink link="/products?gender=man" text="Mens'"/>
                <NavigationLink link="/products?gender=woman" text="Womens'"/>
        </ul>
        <Link to="/" className='lg:flex-1 lg:text-center ml-2 lg:ml-0'>
          <h1 className='font-bold text-lg'>Luxify.</h1>
          </Link>
        <ul className='flex-none hidden mr-4 lg:flex flex-row gap-4 items-center'>
        <NavigationLink link="/cart" text={`Cart (${cart.length})`}/>
                <NavigationLink link="/wishlist" text="Wishlist"/>
                <NavigationLink link="/login" text="Log In"/>
        </ul>
        <FontAwesomeIcon icon={faBars} className='mr-2 inline lg:hidden' onClick={() => setMobileVis(!mobileVis)}/>
    </nav>
      {!mobileVis ? "" :
          <div className="bg-stone-200 h-full absolute w-4/5 right-0 top-0 z-20">
            <FontAwesomeIcon icon={faMultiply} className="ml-2" onClick={() => setMobileVis(!mobileVis)}/>
            <div className='ml-2 flex flex-col gap-10 mt-10'>

            <div className='flex flex-col gap-0'>
            <Link to="/cart" onClick={() => setMobileVis(false)}>Cart ({cart.length})</Link>
            <Link to="/login" onClick={() => setMobileVis(false)}>Log In</Link>
            <Link to="/wishlist" onClick={() => setMobileVis(false)}>Wishlist</Link>
            </div>
              <div className='flex flex-col gap-0'> 
              <p className='border-b border-grey-300 w-min'>Products</p>
              <Link to="/products?gender=man" onClick={() => setMobileVis(false)}>Mens'</Link>
              <Link to="/products?gender=man" onClick={() => setMobileVis(false)}>Womens'</Link>

              </div>
            </div>
            </div>
        }
</>
  )
}

export default Navigation