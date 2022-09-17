import React from 'react'

import {Swiper,SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/navigation'

import { Autoplay, Navigation  } from 'swiper';

const TestomonielSlider = ({ persons }) => {
  return (
    <Swiper className='testimonialSlider'
    modules={[Navigation,Autoplay]}
    autoplay={true}
    navigation={true}>
        {persons.map((person,index)=>{
            const { avatar, occupation ,name,message} = person;
            return <SwiperSlide key={index}>
                   <div className='flex flex-col min-h-[200px] lg:min-h-[230px]'>
                    <div className='flex items-center gap-x-5 mb-5'>
                        <img src={avatar.type} alt="avater" />
                    
                    <div>
                        <div className='text-xl font-semibold'>{name}</div>
                        <div className='text-gray-500'>{occupation}</div>
                    </div>
                    {/* text  */}
                   
                   </div>
                    <div className='text-xl max-w-[570px]'>{message}</div>
                </div>
            </SwiperSlide>
        })}
    </Swiper>
  )
}

export default TestomonielSlider