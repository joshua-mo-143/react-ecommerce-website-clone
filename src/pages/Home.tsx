import HeroHeader from '../components/HeroHeader'
import HomepageCategoryNavigation from '../components/HomepageCategoryNavigation'
import NewsletterSubscribe from '../components/NewsletterSubscribe'
import {Helmet} from 'react-helmet'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <Helmet>
      <meta name="description" content="Website homepage"/>
    </Helmet>
    <HeroHeader/>
    <HomepageCategoryNavigation/>
    <NewsletterSubscribe/>
    </>
  )
}

export default Home