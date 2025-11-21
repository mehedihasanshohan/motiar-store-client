import React from 'react'
import Banner from '../Banner/Banner'
import Works from '../Works/Works'
import OurServices from '../OurServices/OurServices'
import ServiceSection from '../ServiceSection/ServiceSection'
import Reviews from '../Reviews/Reviews'
import Coverage from '../../coverage/Coverage'

const reviewsPromise = fetch('/data/reviews.json').then(res => res.json());

const Home = () => {
  return (
    <div className='max-w-7xl mx-auto'>
      <Banner></Banner>
      <Works></Works>
      <OurServices></OurServices>
      <ServiceSection></ServiceSection>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
      {/* <Coverage></Coverage> */}
    </div>
  )
}

export default Home