import React from 'react'


const Header = () => {
  return (
    <header className='bg-rose-900 shadow-md min-w-full'>
        <div className=' text-white mx-auto flex flex-col  items-center justify-between p-4 sm:px-8'>
            <div className='flex justify-around gap-8 mb-8 w-full'>
              <h1>O que tem para Comer Aqui ?</h1>
            </div> 
            <ul className='flex gap-8'> 
                <li> <a href="#">Tudo</a> </li>
                <li> <a href="#">Salgados</a> </li>
                <li> <a href="#">Sobremesas</a> </li>
                <li> <a href="#">Bebidas</a> </li>
            </ul>  
            
        </div>
        

    </header>
  )
}

export default Header