import MenswearHomepageImg from '../assets/menswear-homepage-image.webp'
import WomenswearHomepageImg from '../assets/womenswear-homepage-image.webp'
import BeautyHomepageImg from '../assets/beauty-homepage-image.webp'
import {Link} from 'react-router-dom';

type Props = {}

const HomepageCategoryNavigation = (props: Props) => {
  return (
    <div className='mt-5 relative grid grid-cols-1 grid-rows-3 lg:grid-cols-3 gap-6 lg:gap-4 lg:grid-rows-1 lg:w-[98%] lg:m-auto'>
        <div className="relative row-span-1 col-span-1">
            <Link to="/products?gender=man">
            <div className='absolute top-0 right-0 w-full h-full hover:bg-stone-200/50 transition-all'>
              <p className='text-center text-3xl font-bold bg-stone-200/50 mx-5 lg:mx-0'>Menswear</p>
            </div>
            <img src={MenswearHomepageImg} className="px-5 lg:p-0 w-full lg:w-auto"/>
            </Link>
        </div>
        <div className="relative row-span-1 col-span-1">
            <Link to="/products?gender=woman">
            <div className='absolute top-0 right-0 w-full h-full hover:bg-stone-200/50 transition-all'>
              <p className='text-center text-3xl font-bold bg-stone-200/50 mx-5 lg:mx-0'>Womenswear</p>
            </div>
            <img src={WomenswearHomepageImg} className="px-5 lg:px-0 w-full lg:w-auto"/>
            </Link>
        </div>
        <div className="relative row-span-1 col-span-1">
        <div className='absolute top-0 right-0 w-full h-full hover:bg-stone-200/50 transition-all'>
              <p className='text-center text-3xl font-bold bg-stone-200/50 mx-5 lg:mx-0'>Beauty</p>
            </div>
            <img src={BeautyHomepageImg} className="px-5 lg:p-0 w-full lg:w-auto"/>
        </div>
    </div>
  )
}

export default HomepageCategoryNavigation