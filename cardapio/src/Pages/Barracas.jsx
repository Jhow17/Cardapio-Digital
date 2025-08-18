import React, { useEffect, useState } from 'react'
import Item from '../Componets/Item.jsx'
import Input from '../Componets/Input.jsx'
import axios from "axios";
import Formulario from '../Componets/Formulario.jsx';
const Barracas = () => {
  const [barrasPesquisadas, setBarracas] = useState([])
  const [dbbarracas, setDBbarracas] = useState([])
  
  useEffect(() => {
    const axiosGet = async () => {
      try {
        const response = await axios.get("http://192.168.0.15:3001/barracas/todas"); 
        console.log("Dados da API:", response); 
        setDBbarracas(response.data.message); 
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error); 
      }
    }
    axiosGet()
  }, [])
 
  
  function searchBarraca(text){
    const result = dbbarracas.filter((barraca) => barraca.categoria.includes(text.toUpperCase()) || barraca.name.includes(text))
    setBarracas(result)

  }
 
  return (
    
    <section className='min-h-screen overflow-hidden'>
      <div className='container mx-auto py-9'>
        <div className='w-1/2 mx-auto'>
           <h2 className='text-3xl'>Barracas</h2>
          <Input aoMudar={searchBarraca} placeholder={'O que vai comer hoje ?'}/>

        </div>
        
        <div className='grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
          {barrasPesquisadas.map(({id, name, imagem, categoria}) =>(
            
            <Item key={id} id={id} nome={name} fonte={imagem} categoria={categoria} show={false} />

          ))}

        </div>
        <Formulario/>

      </div>
    </section>
  )
}

export default Barracas