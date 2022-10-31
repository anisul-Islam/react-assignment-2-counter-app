import React from 'react'

import { newsletter } from '../Data'

const Newsletter = () => {
    const {title,subtitle,placeholder,buttonText} = newsletter;
  return (
        <section className='py-[50px] lg: py - [70px] bg-newsletter mx-auto max-w-[990px]'>
          <div className="container mx-auto  p-[80px] flex justify-center lg:justify-start">
                <div className='w-full max-w-[558px] text-center text-white lg:text-left'>
                    <h2 className='lg:text-4xl text-2xl font-semibold max-w-[350px] mx-auto lg:mx-0 mb-2 leading-normal'>
                        {title}
                    </h2>
                    <p className='text-xl font-semibold mb-1 text-black'>{subtitle}</p>
                    <div className='flex flex-col lg:flex-row gap-[22px]'>
                        <input type="text" placeholder={placeholder} className='h-[60px]  px-6  p-[10px] outline-none  placeholder:text-gray-400 text-gray-700 rounded-[15px] lg:flex-1' />
            <button className='bg-black lg:h-[60px] h-[40px] hover:bg-slate-900 rounded-[10px] lg:text-xl text-lg transition font-medium px-7'>{buttonText}</button>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Newsletter