import React from 'react'


import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import '../slider.css'



import {Pagination,Navigation} from 'swiper'

import {products} from '../Data'

import {HiPlus} from 'react-icons/hi'

const ProductSlider = () => {

    const {pages} = products
  return (
      <Swiper modules={[Pagination, Navigation]} pagination={{
        clickable:true
      }}
      navigation={true}>
        {pages.map((page,index)=>{
            return <SwiperSlide key={index}>
                <div>
                    {page.productList.map((product,index)=>{
                        const {image,icon,name,price,oldPrice} = product;
                        return <div>
                                <div>
                                    <img src={image.type} alt="myimg" />
                                </div>
                                <div>
                                    <HiPlus className='text-xl text-primary' />
                                </div>
                                <div>{name}</div>
                                <div>
                                    <div>$ {price} </div>
                                    <div>$ {oldPrice}</div>
                                </div>
                        </div>
                    })}
                </div>
            </SwiperSlide>
        })}
      </Swiper>
  )
}

export default ProductSlider