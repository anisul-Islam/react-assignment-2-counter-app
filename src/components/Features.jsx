import React from 'react'

import { features } from '../Data'

const Features = () => {
    const {title,subtitle,image,buttonText,items} = features;

  return (
      <section className='py-[50px] lg:py-[70px]' id='features'>
        <div className="container mx-auto">
            <div className='flex flex-col lg:flex-row lg:gap-x-[100px]'>
                {/* image */}
                <div className='flex-1 order-1 lg:-order-1'>
                      <img src={image.type} alt="features" />
                </div>
                {/* text  */}
                <div className='flex-1 flex-col justify-end'>
                    <h2 className='text-xl text-[22px] font-bold py-7 text-start lg:text-[27px] lg:font-semibold'>{title}</h2>
                    <p className='text-[19px] text-start pb-5'>{subtitle}</p>

                    {/* items  */}
                    {items.map((item,index)=>{
                        const {title,subtitle,icon}= item;
                        return <div className='flex mb-6 lg:last:mb-0' key={index}>
                            <div className='text-2xl mr-4 lg:text-3xl'>
                                {icon}
                            </div>
                            <div>
                                <h4 className='text-base lg:text-xl font-semibold bg-white'>{title}</h4>
                                <p>{subtitle}</p>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </div>
    </section>
  )
}

export default Features