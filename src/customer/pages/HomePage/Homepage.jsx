import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel.jsx'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel.jsx'
import Categories from '../../components/Categories/Categories.jsx'
import ImagePoster from '../../components/ImagePoster/ImagePoster.jsx'

const Homepage = () => {
  return (
    <div>
        <MainCarousel/>
        <div>
          <Categories/>
        </div>
        <div>
          <ImagePoster imageSrc={'https://images.unsplash.com/photo-1624588483556-851e7726b9fd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODN8fGZhc2hpb24lMjBtb2RlbCUyMGluJTIwcGFpcnN8ZW58MHx8MHx8fDA%3D'}/>
        </div>
        <div className='lg:px-20'>
           <HomeSectionCarousel/>
        </div>
        <div>
          <ImagePoster imageSrc={'https://images.unsplash.com/photo-1523398002811-999ca8dec234?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        </div>
        <div className='lg:px-20'>
           <HomeSectionCarousel title={'WINTER COLLECTION'}/>
        </div>
        <div>
          <ImagePoster imageSrc={'https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}/>
        </div>
        <div className='lg:px-20'>
           <HomeSectionCarousel title={'Summer COLLECTION'}/>
        </div>
    </div>
  )
}

export default Homepage