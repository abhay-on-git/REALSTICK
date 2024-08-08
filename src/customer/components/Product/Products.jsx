import React from 'react'
import ProductCard from './ProductCard'

const Products = () => {
  return (
    <section class="py-12 bg-white sm:py-16 lg:py-20">
        <h2 className='text-center'>Filters</h2>
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 gap-6 mt-10 lg:mt-16 lg:gap-4 lg:grid-cols-4">
            {[1,1,1,1,1,1,1].map((item)=><ProductCard/>)}
        </div>
    </div>
</section>

  )
}

export default Products