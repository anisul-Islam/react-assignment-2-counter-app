import React from 'react'

import TestomonielSlider from './TestomonielSlider';
import { testimonial } from '../Data'

const Tesomonial = () => {
    const {title,image,persons}= testimonial;

  return (
      <section className='py-[50px] lg:py-[70px]'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row lg:gap-x-10 gap-y-4'>
                <div className='lg:max-w-[50%]'>
                    {/* title  */}
                    <h2 className='font-semibold text-[25px] mb-9'>{title}</h2>
                      <TestomonielSlider persons={persons} />
                </div>
                <div>
                    <img src={image.type} alt="test" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Tesomonial