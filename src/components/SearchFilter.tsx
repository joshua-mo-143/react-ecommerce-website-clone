import React, { SetStateAction } from 'react'
import { ItemSearchFilter } from '../data'

type Props = {
    search: string
}

const SearchFilter = ({search}: Props) => {

    const changeFilter = () => {
        
    }
  return (
    <form action="" className='hidden lg:flex flex-row gap-4 justify-center mt-5'>
                <label htmlFor="" className='flex flex-row gap-2'>
                    <span>Category:</span>
                    <select name="" id="" className='border-2 hover:border-black transition-all'>
                    <option default value=""></option>
                        <option value="">T-shirts</option>
                    </select>
                </label>
                <label htmlFor="" className='flex flex-row gap-2'>
                    <span>Brand:</span>
                    <select name="" id="" className='border-2 hover:border-black transition-all'>
                    <option default value=""></option>
                        <option value="Ambush">Ambush</option>
                        <option value="Gucci">Gucci</option>
                        <option value="Heliot Emil">Heliot Emil</option>
                        <option value="Maison Margiela">Maison Margiela</option>
                        <option value="Rick Owens">Rick Owens</option>
                        <option value="Rick Owens Lilies">Rick Owens Lilies</option>
                    </select>
                </label>
                <label htmlFor="" className='flex flex-row gap-2'>
                    <span>Size</span>
                    <select name="" id="" className='border-2 hover:border-black transition-all'>
                        <option default value=""></option>
                        <option value="">XS</option>
                        <option value="">S</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">XL</option>
                    </select>
                </label>
        </form>
  )
}

export default SearchFilter