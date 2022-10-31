import React from 'react'


import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

import {newInStore} from '../Data'

const NewItemSlider = () => {
  return (
    <Swiper
    className='mx-12'
    grabCursor={true} 
    breakpoints={{
        320:{
            slidesPerView:2,
            spaceBetween:22
            
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 22

        }

    }}
    >
        {
            newInStore.products.map((product,index)=>{
                return <SwiperSlide key={index} 
                className='max-w-[265px]'

                >
                    <div className='relative'>
                        <img src={product.image.type} alt="productImage" />
                    <div className='absolute bottom-[30px] text-center text-white
                    w-full text-[18px] lg:text-2xl font-medium capitalize
                    '>{product.name}</div>
                    </div>
                </SwiperSlide>
            })
        }
    </Swiper>
  )
}

export default NewItemSlider