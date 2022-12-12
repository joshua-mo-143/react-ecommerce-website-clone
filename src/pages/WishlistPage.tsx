import {Helmet} from 'react-helmet'

type Props = {}

const WishlistPage = (props: Props) => {
  return (
    <>
                <Helmet>
    <meta name="description" content="Website product wishlist page"/>
  </Helmet>
    <div>
        <h1 className='text-center mt-5'>You need to log in to access this page!</h1>
        </div>
        </>

  )
}

export default WishlistPage