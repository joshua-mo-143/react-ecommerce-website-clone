import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Product } from '../data'
import axios from 'axios'
import { cartStore } from '../zustand'
import { cartItem } from '../data'
import {Helmet} from 'react-helmet'

type Props = {}

const ProductPage = (props: Props) => {

  const {id} = useParams();
  const [productData, setProductData] = React.useState<Product>();
  const [size, setSize] = React.useState<String>("");
  const {cart, editCart} = cartStore();

  const handleAddToCart = () => {
    if (size == "") {
      return
    }

    let newItem: cartItem = {
        product_id: productData?.product_id,
        quantity: 1,
        price: productData?.price,
        size: size,
        brand: productData?.brand,
        name: productData?.name
    }

    const updatedCart = cart.map(product => {
      if (product.product_id == productData?.product_id && product.size == size) {
        return {...product, quantity: product.quantity+1};
      } else {
        return {...product};
      }
    })

    if (!cart.find(product => product.product_id == productData?.product_id && product.size == size)) {
      editCart([...cart, newItem]);
    } else {
      editCart([...updatedCart]);
      
    }

  }

  useEffect(() => {
    const getData = async () => {
     await axios.get(`https://shuttle-rocket-api1.shuttleapp.rs/products/${id}`)
             .then(res => setProductData(res.data));
    }
    getData();
 }, [])

  useEffect(() => {
    let selectedSize = document.querySelectorAll('#size-selection > button');
    for (let i = 0; i < selectedSize.length; i++) {
      if ((selectedSize[i] as HTMLButtonElement).value == size) {
        selectedSize[i].classList.add('bg-stone-300');
      } else {
        selectedSize[i].classList.remove('bg-stone-300');
      }
    }
  }, [size])

  return (
    <>
            <Helmet>
    <meta name="description" content="Website product page"/>
  </Helmet>
        <div className='h-screen w-full grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-auto py-10'>
      <div className='flex flex-col justify-center items-center w-3/5 m-auto max-h-[400px]'>
        <img src={`/${productData?.imgsrc}`} height="300px" className="object-scale-down w-3/5 h-4/5 mt-10 lg:mt-10"/>
      </div>
      <div className='flex flex-col my-20 mx-2 lg:mx-0 gap-8 pb-5'>
        <p className='text-stone-300 tracking-widest'>{productData?.brand.toLocaleUpperCase()}</p>
        <div className='flex flex-col text-md'>
          <h1>{productData?.name}</h1>
        <p className='text-sm'>{productData?.description}</p>
        <p>£{productData?.price}</p>
        </div>
        <div>
          <p className=''>Sizes:</p>
          <div className='flex flex-row gap-2 w-min m-auto lg:m-0' id="size-selection">
          <button onClick={(e) => setSize((e.target as HTMLButtonElement).value)} className='py-2 px-3 rounded-full min-w-50px cursor-pointer hover:bg-stone-300 transition-all' value="XS">XS</button>
          <button onClick={(e) => setSize((e.target as HTMLButtonElement).value)} className='py-2 px-4 rounded-full min-w-50px cursor-pointer hover:bg-stone-300 transition-all' value="S">S</button>
          <button onClick={(e) => setSize((e.target as HTMLButtonElement).value)} className='py-2 px-3 rounded-full min-w-50px cursor-pointer hover:bg-stone-300 transition-all' value="M">M</button>
          <button onClick={(e) => setSize((e.target as HTMLButtonElement).value)} className='py-2 px-4 rounded-full min-w-50px cursor-pointer hover:bg-stone-300 transition-all' value="L">L</button>
          <button onClick={(e) => setSize((e.target as HTMLButtonElement).value)} className='py-2 px-3 rounded-full min-w-50px cursor-pointer hover:bg-stone-300 transition-all' value="XL">XL</button>
          </div>
        </div>
        <button onClick={handleAddToCart} className='bg-stone-100 hover:bg-stone-300 transition-all px-5 py-2 w-max m-auto lg:m-0'>Add to Cart</button>
      </div>
    </div>
    </>
  )
}

export default ProductPage