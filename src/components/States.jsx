import React from 'react'
import { stats } from '../Data'
const States = () => {
  return (
    <div className='bg-accent rounded-[20px] p-12'>
        <div className="flex flex-wrap gap-y-8">
            {stats.map((stat)=>{
                return <div className='min-h-[70px] w-3/6 flex flex-col justify-center first-letter:
                odd:border-r lg:flex-1 lg:even:border-r lg:even:last:border-none
                ' key={stat.index}>
                    <div className='text-2xl font-semibold lg:text-4xl'>
                        {stat.value}
                    </div>
                    <div className='text-base font-light max-w-[110px]
                    mx-auto lg:text-xl 
                    
                    '>
                        {stat.text}
                    </div>
                </div>
            })}
        </div>
        
    </div>
  )
}

export default States