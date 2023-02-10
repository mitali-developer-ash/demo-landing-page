import React from 'react'

import Header from '../Header/header.component'
import Banner from "../Banner/banner.component"
import OfferBanner from "../Offer-Banner/offer-banner.components"
import Categories from "../Categories/categories.components"
import TradingProducts from "../Treding-products/trading-products.components"
import ContactBanner from "../contact-banner/contact-banner.component"
import Footer from "../Footer/footer"

const Homepage = () => {
  return (
    <div className='h-full w-full grid  grid-col'>
        <Header />
        <Banner />
        <OfferBanner />
        <Categories />
        <TradingProducts />
        <ContactBanner />
        <Footer />
    </div>
  )
}

export default Homepage