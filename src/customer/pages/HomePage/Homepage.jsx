import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel.jsx'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx'
import Categories from '../../components/Categories/Categories.jsx'

const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
          <Categories/>
        </div>
        <div className='lg:px-20'>
           <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default Homepage