import React from 'react'
import Button from './Button'

const Item = ({id, nome, fonte, categoria, price, show}) => {
 
    
    
  return (
    <div className='bg-neutral-200 rounded-2xl p-2 md:px-3 flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/2)] lg:flex-[0_0_calc(100%/3)] '>
        <div className='relative flex justify-center items-center w-full h-48 mb-4'>
            <img className='max-h-full max-w-full' src={fonte} alt={`Imagem da barraca ${nome}`} />
        </div>
       <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-semibold min-h-16'>{nome}</h3>
       {show ? <p className='text-lg select-none text-gray-700'>R$: {price}</p> : ''}
        <p className='text-sm select-none lg:text-md text-gray-500'>{categoria}</p>
        {!show ? <Button nome={'Cardápio'} id={id}/> : ''}
        </div> 
      
    </div>
  )
}

export default Item