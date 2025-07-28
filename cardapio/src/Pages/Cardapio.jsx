import React,{useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import Item from '../Componets/Item.jsx'
import Upload from '../Componets/Upload.jsx';

const Cardapio = () => {
  const [DBCardapio, setDBCradapio] = useState([])
  const { id } = useParams();
  console.log(id)
   useEffect(() => {
      const axiosGet = async () => {
        try { 
          const response = await axios.get(`http://192.168.0.18:3001/barracas/cardapio/${id}`); 
          console.log("Dados da API cardapio:", response); 

          setDBCradapio(response.data.message); 
          
        } catch (error) {
          console.error("Erro ao buscar dados da API:", error); 
        }
      }
      axiosGet()
    }, [id])
    console.log(DBCardapio)

  return (
    <section className='min-w-full'>
      <div className='container mx-auto px-2 py-9'>
       <h2 className='text-3xl mb-7'>Cardapio</h2> 
       <div className='grid grid-cols-1 grid-rows-3 gap-4 md:grid-cols-3 lg:grid-cols-4 '>
        {DBCardapio.map(({name, description, price}) => {
           return  <Item key={name} nome={name} categoria={description} price={price} show={true} />
        })}
       
       </div>
       <Upload/>
       

      </div>
      
    </section>
  )
}

export default Cardapio