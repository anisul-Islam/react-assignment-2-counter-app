import React from 'react'

import { footer } from '../Data'

const Footer = () => {
    const {social} = footer;
  return (
      <section className=' py-[50px] lg:py-[70px] bg-[#23262F] text-white max-w-[990px] mx-auto'>
        <div className="lg:container mx-auto">
            <div className='flex flex-col lg:flex-row justify-between border-b border-opacity-50 border-gray-700 lg:pb-14 pl-8 lg:pl-0 mb-14'>
                <a href="#" className='mb-6 lg:mb-0 font-bold text-2xl lg:text-5xl'>
                    FurniShop
                </a>
                {/* social  */}
                <div className='flex gap-x-5 text-2xl mb-3'>

                {social.map((item,index)=>{
                    return <div key={index} className='w-12 h-12 bg-gray-700 hover:bg-accent flex justify-center items-center rounded-full transition'>
                        <a href="#">{item.icon}</a>
                    </div>
                }) }
                </div>
            </div>
            {/* copyright text  */}
         
            <p className='text-center text-white'>&Copy : My FurnitureShop 2022 - All rights reserve</p>
        </div>
      </section>
  )
}

export default Footer