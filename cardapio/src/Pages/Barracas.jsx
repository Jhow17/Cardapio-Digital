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
      try { // <--- Ponto 3: Adicionar tratamento de erro
        const response = await axios.get("http://192.168.0.18:3001/barracas/todas"); // <--- Ponto 4: URL Completa
        console.log("Dados da API:", response); // Para depuração
        setDBbarracas(response.data.message); // <--- Ponto 5: Acessar a propriedade correta da respost
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error); // Logar o erro
        // Opcional: setar um estado de erro ou mostrar mensagem ao usuário
      }
    }
    axiosGet()
  }, [])
 
  
  function searchBarraca(text){
    const result = dbbarracas.filter((barraca) => barraca.categoria.includes(text.toUpperCase()) || barraca.name.includes(text))
    setBarracas(result)

  }
 
  return (
    
    <section className=' min-w-full min-h-screen'>
      <div className='container mx-auto px-2 py-9'>
        <h2 className='text-3xl'>Barracas</h2>
         <Input aoMudar={searchBarraca} placeholder={'O que vai comer hoje ?'}/> 
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