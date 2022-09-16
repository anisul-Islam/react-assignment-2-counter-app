import React from 'react'
import {features} from '../Data'

const Feature2 = () => {
    const {title,subtitle,image,} = features.feature2;
  return (
      <section className='py-[50px] lg:py-[150px]'>
          <div className="container mx-auto">
              <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>

                  <div className='flex-1 flex-col justify-end'>
                      <h2 className='text-xl text-[22px] font-bold py-7 text-start lg:text-[27px] lg:font-semibold'>{title}</h2>
                      <p className='text-[19px] text-start pb-5'>{subtitle}</p>

                      {/* items  */}

                  </div>
                  {/* image */}
                  <div className='flex-1'>
                      <img src={image.type} alt="features" />
                  </div>
                  {/* text  */}
                 
              </div>

          </div>
      </section>
  )
}

export default Feature2