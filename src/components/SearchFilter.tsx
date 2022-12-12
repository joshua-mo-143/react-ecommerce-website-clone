import {useNavigate} from 'react-router-dom'

type Props = {
  
}

const SearchFilter = (props: Props) => {

    const navigate = useNavigate();

    const changeFilter = (categoryname: string, selection: string) => {
        let currentUrlParams = new URLSearchParams(window.location.search);
        if (selection == "") {
            currentUrlParams.delete(categoryname);
        } else {
            currentUrlParams.set(categoryname, selection);
        }

        navigate(window.location.pathname + "?" + currentUrlParams.toString());
    }
  return (
    <form action="" className='flex flex-col sm:flex-row gap-4 justify-center mt-5 items-center py-5'>
                <label htmlFor="category" className='flex flex-row gap-2'>
                    <span>Category:</span>
                    <select name="category" id="" className='border-2 hover:border-black transition-all'  onChange={(e) => changeFilter((e.target as HTMLSelectElement).name, (e.target as HTMLSelectElement).value)}>
                    <option selected value=""></option>
                    <option value="Button-up Shirt">Button-up Shirts</option>
                        <option value="Coat">Coats</option>
                        <option value="Camisole">Camisoles</option>
                        <option value="Jacket">Jackets</option>
                        <option value="Pants">Pants</option>
                    </select>
                </label>
                <label htmlFor="brand" className='flex flex-row gap-2'>
                    <span>Brand:</span>
                    <select name="brand" id="" className='border-2 hover:border-black transition-all'  onChange={(e) => changeFilter((e.target as HTMLSelectElement).name, (e.target as HTMLSelectElement).value)}>
                    <option selected value=""></option>
                        <option value="Ambush">Ambush</option>
                        <option value="Gucci">Gucci</option>
                        <option value="Heliot Emil">Heliot Emil</option>
                        <option value="Maison Margiela">Maison Margiela</option>
                        <option value="Rick Owens">Rick Owens</option>
                        <option value="Rick Owens Lilies">Rick Owens Lilies</option>
                    </select>
                </label>
                <label htmlFor="size" className='flex flex-row gap-2'>
                    <span>Size</span>
                    <select name="size" id="" className='border-2 hover:border-black transition-all' onChange={(e) => changeFilter((e.target as HTMLSelectElement).name, (e.target as HTMLSelectElement).value)}>
                        <option selected value=""></option>
                        <option value="XS">XS</option>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                        <option value="XL">XL</option>
                    </select>
                </label>
        </form>
  )
}

export default SearchFilter