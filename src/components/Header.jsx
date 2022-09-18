import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import {CgMenuRight, CgClose} from 'react-icons/cg'
import { navigation } from '../Data'


import Navmobile from './Navmobile'


const Header = () => {
 
        const [bg,setbg] = useState(false);
        const [mobilenab, setmobilenab] = useState(false);


        useEffect(()=>{
            window.addEventListener('scroll',()=>{
                return window.scrollY > 50 ? setbg(true) : setbg(false);
            })
        })

  return (
    <header className={` 
        ${bg ? "bg-[#23262F] py-1 lg:py-4 flex h-[70px] items-center " : 'bg-none'}
        fixed left-0 w-full py-8 z-10 transition-all duration-200
    `}>
        <div className="container mx-auto">
            <div className='flex justify-between'>
                {/* logo */}
                  <a href="#home" className='mb-6 lg:mb-0 text-white font-bold text-xl lg:text-2xl'>
                      FurniShop
                  </a>
                  {/* menu icon  */}

                  <div 
                      onClick={() => setmobilenab(!mobilenab)}
                  className='text-2xl text-white md:hidden lg:text-3xl'>
                    { mobilenab ? <CgClose/>: <CgMenuRight/> }
                  </div>

                  <nav className='hidden md:flex'>
                    <ul className='md:flex md:gap-x-12'>
                          {navigation.map((item,index)=>{
                              return <li key={index}>
                                <a className='capitalize text-white hover:border-b transition-all' href={` #${item.href}`}>{item.name}</a>
                            </li>
                          })}
                    </ul>
                  </nav>

                  {/* nav mobile  */}
                  <div className={`
                  ${mobilenab ? 'left-0' : '-left-full'}
                  md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all
                  `}>
                      <Navmobile />
                  </div>
            </div>
        </div>
    </header>
  )
}

export default Header