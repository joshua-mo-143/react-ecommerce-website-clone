import React, {useEffect} from 'react'
import { Link, useLocation} from 'react-router-dom'
import axios from 'axios'
import SearchFilter from '../components/SearchFilter'
import { Product } from '../data'
import {Helmet} from 'react-helmet'

type Props = {}

const ProductsPage = (props: Props) => {
    
    let search = useLocation().search;
    console.log(search);
    const gender = new URLSearchParams(search).get('gender');
    const brand = new URLSearchParams(search).get('brand');
    const category = new URLSearchParams(search).get('category');
    const [productData, setProductData] = React.useState<Product[]>([]);

    useEffect(() => {
       const getData = async () => {
        await axios.get('https://shuttle-rocket-api.shuttleapp.rs/products')
                .then(res => setProductData(res.data));
       }
       getData();
    }, [])
    
    
  return (
    <div>
        <Helmet>
    <meta name="description" content="Website products page"/>
  </Helmet>
        <h1 className='text-center lg:mr-10 mt-10 text-xl font-bold lg:text-3xl'>View Products</h1>
            <SearchFilter search={search}/>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-auto lg:w-4/5 m-auto lg:mt-10 gap-4'>
            {productData.filter((product) => {
                if (product.gender == gender) {
                    if (brand != null && category != null) {
                        return product.brand == brand && product.category == category;
                    } else if (brand != null) {
                        return product.brand == brand;
                    } else if (category != null) {
                        return product.category == category;
                    }
                    else {
                        return product.gender == gender;
                    }
                }
            }).map((product) => (
                <Link to={`/products/${product.product_id}`} key={product.product_id}>
                    <div className='flex flex-col text-xs font-left'>
                    <img src={`/${product.imgsrc}`} alt=""  width='80%' height='50%' className='meme object-scale-down lg:w-500px lg:h-500px'/>
                    <p className='ml-5 text-sm'>{product.brand.toLocaleUpperCase()}</p>
                    <p className='ml-5 text-sm'>{product.name}</p>
                    <p className='ml-5 text-sm'>{`£${product.price}.00`}</p>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductsPage