import React from 'react'
import Banner from '../Banner/Banner'
import Works from '../Works/Works'
import OurServices from '../OurServices/OurServices'
import ServiceSection from '../ServiceSection/ServiceSection'

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Works></Works>
      <OurServices></OurServices>
      <ServiceSection></ServiceSection>
    </div>
  )
}

export default Home