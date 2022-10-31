import React from 'react'


//import data
import { newInStore } from '../Data'
import NewItemSlider from './NewItemSlider';

const NewItems = () => {
    const { title, subtitle, link, icon } = newInStore;
    return (
        <section className='py-[50px] lg:py-[70px]'>
            <div className="container mx-auto">
                <div className='flex flex-col lg:flex-row'>
                    {/* text  */}
                    <div className='flex md:flex-col items-baseline gap-x-6 
                mb-6 lg:mb-0
                '>
                        <h2 className='text-2xl font-bold 
                    max-w-[245px] lg:mt-[30px] lg:mb-[30px]  lg:p-1
                    md:p-5 md:max-w-[500px]
                    '>{title}</h2>
                        <p className='lg:max-w-[245px] lg:p-1 md:p-5 md:max-w-[500px] lg:mb-12' >{subtitle}</p>
                        <div className='hidden lg:flex items-center'>
                            <a
                                className='hover:border-b border-danger lg:items-center'
                                href="#">{link}</a>
                            <div className='text-3xl ml-2'>{icon}</div>
                        </div>
                    </div>
                    {/* slider */}
                    <div className='lg:max-w-[800px] xl:max-w-[990px] first-letter:
                    lg:absolute lg:right-24
                    '>

                        <NewItemSlider />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewItems