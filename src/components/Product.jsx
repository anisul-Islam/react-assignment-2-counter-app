import React from 'react'

import { products } from '../Data'


import ProductSlider from './ProductSlider'

const Product = () => {
    const {title,subtitle} = products;


  return (
      <section className='py-[50px] lg:py-[70px] text-center'>
        <div className="container mx-auto" >
        <div className=''>
            <h2 className='font-bold lg:text-[35px] py-[20px] lg:py-[30px]'>{title}</h2>
            <p className='max-w-[639px] mx-auto mb-[50px] lg:mb-[70px]'>{subtitle}</p>
        </div>

        {/* slider  */}

        <ProductSlider/>
        </div>
      </section>
  )
}

export default Product