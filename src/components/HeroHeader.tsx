import React from 'react'
import HeroHeaderImg from '../assets/hero-header-img.jpg'
type Props = {}

const HeroHeader = (props: Props) => {
  return (
    <div className='grid grid-rows-1 grid-cols-1 lg:grid-cols-2 w-full h-96 lg:h-[36rem]'>
                <div className="hidden ml-0 lg:ml-[30%] row-span-1 col-span-1 lg:flex flex-row items-center justify-center">
            <img src={HeroHeaderImg} alt="heehee" className='object-cover h-[500px] w-500px shadow-md'/>
        </div>
        <div className="mr-0 lg:mr-[30%] row-span-1 col-span-1 flex flex-col gap-4 items-center text-center justify-center">
            <h1 className='text-center text-3xl lg:mx-4 font-bold'>CHECK OUT OUR NEW ARRIVALS & COP THE LATEST DROPS HERE.</h1>
            <button className='bg-fuchsia-300 hover:bg-fuchsia-500 transition-all px-5 py-2 rounded-lg font-bold'>FIND OUT MORE</button>

        </div>
    </div>
  )
}

export default HeroHeader