import React from 'react'

import { navigation } from '../Data'

const Navmobile = () => {
  return (
    <div className='bg-white w-full h-full sha-2xl'>
        <ul className='text-center h-full flex flex-col justify-center item-center gap-y-7 '>
            {
                navigation.map((nav,index)=>{
                    return <li key={index}>
                        <a className='text-xl font-medium capitalize' href={nav.href}>{nav.name}</a>
                    </li>
                })
            }
        </ul>
    </div>
  )
}

export default Navmobile