import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { CiForkAndKnife } from "react-icons/ci";

const Header = () => {
  const [open, setOpen] = useState(false)
  const navLinks = [
  { name: 'Tudo', path: '/' },
  { name: 'Salgados', path: '/salgados' },
  { name: 'Sobremesas', path: '/sobremesas' },
  { name: 'Bebidas', path: '/bebidas' }
]
  return (
    <header className='bg-rose-900 shadow-md min-w-full overflow-hidden top-0 z-50'>
        <div className=' text-white mx-auto  relative flex flex-col items-center justify-between p-2 sm:px-8'>
            <div className='flex justify-around gap-8 mb-8 '>
              <h1 className='text-3xl mt-2 font-semibold uppercase'>O que tem para Comer Aqui ?</h1>
            </div> 
            <ul className={ open ? 'bg-neutral-900/90 flex-col text-black absolute top-30 left-0 w-1/2 p-4 transform transition-transform duration-300 ease-in-out translate-x-0 ' : 'hidden sm:flex gap-8'}> 
              {navLinks.map(({name, path}) => (<li key={name}> <a href={path} className='uppercase text-gray-600 sm:text-neutral-200 hover:text-neutral-900 transition-colors duration-300' >{name}</a> </li>))}
            </ul>  
            
        </div>
        <button className='flex sm:hidden text-white' onClick={() => setOpen(!open)}>
          {/* condicional ternario antes dos dois pontos se true e depois false*/}
          {open ? <CiForkAndKnife className='z-50' size={30} /> : <CiMenuBurger size={30} /> }

        </button>

    </header>
  )
}

export default Header