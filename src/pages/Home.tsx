import React from 'react'
import HeroHeader from '../components/HeroHeader'
import HomepageCategoryNavigation from '../components/HomepageCategoryNavigation'
import NewsletterSubscribe from '../components/NewsletterSubscribe'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
    <HeroHeader/>
    <HomepageCategoryNavigation/>
    <NewsletterSubscribe/>
    </>
  )
}

export default Home