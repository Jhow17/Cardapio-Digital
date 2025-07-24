import React from 'react'
import cardapio from '../Cardapio.js'
import Item from '../Componets/Item.jsx'

const Cardapio = () => {


  return (
    <section className='bg-neutral-100 min-w-full'>
      <div className='container mx-auto px-2 py-9'>
       <h2 className='text-3xl mb-7'>Cardapio</h2> 
       <div className='grid  grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
        {cardapio.map(({nome, imagem, descricao, price}) => {
           return  <Item key={nome} nome={nome} fonte={imagem} categoria={descricao} price={price} show={true} />
        })}
       
       </div>
       

      </div>
      
    </section>
  )
}

export default Cardapio