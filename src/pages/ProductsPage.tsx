import React, {useEffect} from 'react'
import { Link, useLocation} from 'react-router-dom'
import axios from 'axios'
import SearchFilter from '../components/SearchFilter'
import { ItemSearchFilter, Product } from '../data'
type Props = {}

const ProductsPage = (props: Props) => {
    
    let search = useLocation().search;
    console.log(search);
    const gender = new URLSearchParams(search).get('gender');
    const brand = new URLSearchParams(search).get('brand');
    const [productData, setProductData] = React.useState<Product[]>([]);

    useEffect(() => {
       const getData = async () => {
        await axios.get('https://hello-rocket-e.shuttleapp.rs/products')
                .then(res => setProductData(res.data));
       }
       getData();
    }, [])
    
    
  return (
    <div>
        <h1 className='text-center lg:mr-10 mt-10 text-xl font-bold lg:text-3xl'>View Products</h1>
            <SearchFilter search={search}/>
        <div className='grid grid-cols-1 lg:grid-cols-4 lg:grid-rows-auto lg:w-4/5 m-auto lg:mt-10 gap-4'>
            {productData.filter((product) => {
                if (product.gender == gender) {
                    if (brand != null) {
                        return product.brand == brand;
                    }
                    else {
                        return product.gender == gender;
                    }
                }
            }).map((product) => (
                <Link to={`/products/${product.product_id}`} key={product.product_id}>
                    <div className='flex flex-col text-xs font-left'>
                    <img src={`/${product.imgsrc}`} alt=""  width='80%' className='meme object-scale-down w-500px h-500px'/>
                    <p>{product.brand.toLocaleUpperCase()}</p>
                    <p>{product.name}</p>
                    <p>{`£${product.price}.00`}</p>
                </div>
                </Link>
            ))}
        </div>
    </div>
  )
}

export default ProductsPage