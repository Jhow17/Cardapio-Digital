import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";
import { routes } from '../routes.jsx';

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className='bg-rose-900 shadow-md relative min-w-full overflow-hidden top-0 z-50'>
        <div className=' text-white mx-auto flex flex-col items-center justify-between p-2 sm:px-8'>
            <div className='flex justify-around gap-8 mb-8 '>
              <h1 className='text-2xl mt-2 font-semibold uppercase'>O que tem para Comer Aqui ?</h1>
            </div> 
            <ul className={ open ? 'bg-neutral-200/90 flex-col text-black fixed text-left top-30 left-0 w-1/4 px-2 transform transition-transform duration-300 ease-in-out translate-x-0 rounded-lg ' : 'hidden sm:flex gap-8'}> 
              {routes.map(({title, href, Icon}) => (<li key={title}> <a href={href} className='uppercase text-gray-600 sm:text-neutral-200 hover:text-neutral-900 transition-colors duration-300' > <Icon/> {title}</a> </li>))}
            </ul>  
            
        </div>
        <button className='flex sm:hidden relative text-white' onClick={() => setOpen(!open)}>
          {/* condicional ternario antes dos dois pontos se true e depois false*/}
          {open ? <CiForkAndKnife className='z-50' size={30} /> : <CiMenuBurger size={20} /> }

        </button>

    </header>
  )
}

export default Header