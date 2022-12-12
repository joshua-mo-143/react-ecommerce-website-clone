import React from 'react'
import { cartStore } from '../zustand'
import axios from 'axios'
import {Helmet} from 'react-helmet'

type Props = {}

const CartPage = (props: Props) => {

  const {cart, editCart} = cartStore();
  const cartTotal = React.useMemo(() => {
    //@ts-ignore
    return cart.reduce((total, item) => item.price + total, 0)
  },[cart])

  const handlePay = async () => {
    await axios.get('https://shuttle-rocket-api.shuttleapp.rs/paymentlink')
    .then(res => window.open(res.data, "_blank"));
  }

  const removeItem = (id: number, size: string) => {

    let filteredCart = cart.filter(product => {
      if (product.product_id == id) {
        return product.size != size;
      }
      return product;
    });

    editCart([...filteredCart]);
  }

  return (
    <>
        <Helmet>
    <meta name="description" content="Website customer cart page"/>
  </Helmet>
    <div className='w-4/5 m-auto'>
      <p className='text-center py-5 font-bold text-xl lg:text-3xl'>View Your Cart</p>
        {cart.length == 0 ? 
          <p className='text-center'>You haven't added any items to your cart!</p>
        :
        <div className='grid grid-cols-1 lg:grid-cols-5 grid-rows-auto lg:grid-rows-1 lg:gap-4'>
        <div className='col-span-4 row-span-1 flex flex-col gap-4'>
          {cart.map((x: any) => (
            <div className='bg-stone-400 shadow-md rounded-xl lg:mx-5 mx-2 p-2 flex flex-row justify-between'>
              <div className='flex flex-col'>
              <p>{x.brand}</p>
              <p>{x.name}</p>
              <p>Quantity: {x.quantity}</p>
              <p>Size: {x.size}</p>
              </div>
              <div>
              <p className='text-right'>£{x.price}.00</p>
              <p className='text-xs italic'>{x.quantity > 1 ? `total: £${x.price * x.quantity}.00` : ""}</p>
              <button className='text-xs cursor-pointer' onClick={() => removeItem(x.product_id, x.size)}>Remove item</button>
              </div>
            </div>
          ))}
        </div>
        <div className='text-sm col-span-1 row-span-1 mt-5 lg:mt-0 flex flex-col gap-10 bg-stone-400 p-2 rounded-xl'>
          <h1 className='text-lg font-bold text-center'>Checkout Summary</h1>
          <div className='flex flex-col '>
          <div className='flex flex-row justify-between'>
          <p>ITEM SUMMARY</p>
          <p>£{cartTotal}.00</p>
          </div>
          <div className='flex flex-row justify-between'>
          <p>SHIPPING</p>
          <p>£15.00</p>
          </div>
          <hr className='my-4'/>
          <div className='flex flex-row justify-between'>
          <p>OVERALL TOTAL</p>
          <p>£{cartTotal + 15}.00</p>
          </div>
          <button className='py-2 px-5 mt-5 rounded-xl bg-stone-300 hover:rounded-none transition-all hover:font-bold' onClick={handlePay}>Pay with Stripe</button>
          </div>
        </div>
      </div>}
    </div>
    </>
  )
}

export default CartPage