import React from 'react'
import { hero } from '../Data'
import States from './States';

 const Hero = () => {
     const { title, subtitle, buttonText } = hero;


  return (
      <section className=' h-[850px]  mx-auto bg-hero  bg-cover bg-right bg-no-repeat
    text-white pt-[225px] pb-[254px] relative mb-4 
    
    md:w-full
    lg:bg-center lg:mb-12 lg:w-[1100px]

    '>
        <div className="container mx-auto text-center">
            {/* title  */}
            <h1 className='text-2xl mx-auto first-letter 
            font-semibold mb-[30px] lg:text-[50px]
            lg:leading-tight lg:max-w-[880px]
            '>{title}</h1>
            <h2 className=' mb-[30px] mx-w-[660px] 
            mx-auto lg:mb-[62px] lg:text-xl
            '>{subtitle}</h2>
            <button className='bg-[rgba(255,255,255,0.4)] 
            hover:bg-[rgba(253,235,235,0.6)] hover:text-black transition px-[35px] 
            py-[10px] mb-[160px] text-xl rounded-md backdrop-blur-md
            sm:py-[7px] sm:px-[20px]
            '>{buttonText}</button>

            {/* states  */}

            <div>
                <States/>
            </div>
        </div>
    </section>
  )
}

export default Hero