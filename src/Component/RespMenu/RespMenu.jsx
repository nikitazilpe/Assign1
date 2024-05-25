import React from 'react'
import { MenuLinks } from '../Navbar/Navbar'

const RespMenu = ({showMenu}) => {
  return (
    <div className={` ${
        showMenu  ? "left-[60%]" : "left-[100%]"
    } fixed  w-[30%] transition-all duration-300 shadow-2xl 
    pt-10 px-12  bg-white  dark:bg-gray-900 z-50 border border-lime-300
    flex justify-between pb-4`}>
      <div className='card flex '>
       

        <nav className='mt-12 '>
            <ul className='space-y-4 text-xl'>
                 {
                    MenuLinks.map(({id, name, link}) => {
                     return(
                        <li key={id}>
                            <a href={link} className='mb-5 inline-block '> 
                            {""}
                            {name}</a>
                        </li>
                     )
                    })
                 }
            </ul>
        </nav>
      </div>
    </div>
  )
}

export default RespMenu;
