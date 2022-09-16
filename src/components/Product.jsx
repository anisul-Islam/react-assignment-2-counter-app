import React from 'react'

import { products } from '../Data'


import ProductSlider from './ProductSlider'

const Product = () => {
    const {title,subtitle} = products;


  return (
      <section className='py-[50px] lg:py-[70px]'>
        <div className="container mx-auto" >
        <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>

        {/* slider  */}

        <ProductSlider/>
        </div>
      </section>
  )
}

export default Product