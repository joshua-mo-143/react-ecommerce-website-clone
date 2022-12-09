import React from 'react'
import MenswearHomepageImg from '../assets/menswear-homepage-image.jpg'
import WomenswearHomepageImg from '../assets/womenswear-homepage-image.jpg'
import BeautyHomepageImg from '../assets/beauty-homepage-image.jpg'
import {Link} from 'react-router-dom';

type Props = {}

const HomepageCategoryNavigation = (props: Props) => {
  return (
    <div className='mt-5 relative grid grid-cols-1 grid-rows-3 lg:grid-cols-3 gap-6 lg:gap-4 lg:grid-rows-1'>
        <div className="relative row-span-1 col-span-1">
            <Link to="/products?gender-man">
            <h1 className='absolute lg:top-10 left-1/3 font-bold text-stone-700 text-xl lg:text-3xl px-5 py-2 bg-sky-500/50 rounded-xl'>Menswear</h1>
            <img src={MenswearHomepageImg} className="px-5"/>
            </Link>
        </div>
        <div className="relative row-span-1 col-span-1">
            <h1 className='absolute lg:left-[25%] lg:top-10 left-[25%] font-bold text-stone-700 px-5 py-2 bg-fuchsia-500/50 rounded-xl text-xl lg:text-3xl'>Womenswear</h1>
            <img src={WomenswearHomepageImg} className="px-5"/>
        </div>
        <div className="relative row-span-1 col-span-1">
            <h1 className='absolute lg:left-[40%] lg:top-10 left-[40%] font-bold text-white text-xl lg:text-3xl px-5 py-2 bg-red-500/50 rounded-xl'>Beauty</h1>
            <img src={BeautyHomepageImg} className="px-5"/>
        </div>
    </div>
  )
}

export default HomepageCategoryNavigation