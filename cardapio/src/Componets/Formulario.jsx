import React, { useState } from 'react'
import axios from 'axios'

const Formulario = () => {
    const [valorSelec, setValorSelec] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const opcoes =  ['Espetinhos','Porções','Lanches','Bolos/Docês','Pastéis', 'Outros']
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name : title,
            imagem : image,
            categoria : valorSelec
          }
        try {
            const response =  await axios.post(`${backendUrl}/barracas/cadastro`, data)
            console.log('Barraca criada com sucesso:', response.data)
            alert('Barraca cadastrada com sucesso!'); // Usar um modal ou notificação real em vez de alert
        }catch(error){
            console.error('Erro ao cadastrar barraca:', error.response ? error.response.data : error.message)

        }


    }
  return (
    <form onSubmit={handleSubmit} className="bg-neutral-50 flex max-w-lg rounded-2xl mx-auto flex-col gap-6 px-8">
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="ml-2 md:text-2xl font-bold">
                Nome da Barraca
            </label>
            <input
            type="text"
            placeholder="Digite o nome da sua Barraca"
            className=" rounded-lg md:rounded-2xl border border-gray-300 px-4 py-2"
            id="title"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
            <label htmlFor="categoriaRadio" className="ml-2 text-base md:text-2xl font-bold">
                Categoria Barraca
            </label>
        <div className="grid grid-cols-2 md:grid-cols-1 gap-x-4 gap-y-2">
        
            {opcoes.map((opcao) => (
            <div key={opcao} className="
                grid grid-cols-[1fr_3fr] p-0.5 rounded-lg cursor-pointer transition-all text-center duration-200 border-0.5 "> 
                <input
                    type="radio"
                    id= "categoria"
                    name="categoria" 
                    value={opcao}
                    checked={valorSelec === opcao}
                    onChange={(e) => setValorSelec(e.target.value)}
                    className="mr-2 max-h-4"
                />
                <label htmlFor={`categoria-${opcao}`} className="md:text-xl"> 
                    {opcao}
                </label>
            </div>
            
    ))}
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="ml-2 md:text-2xl font-bold">
                Imagem
            </label>
            <input
            type="text"
            placeholder="Digite o endereço de uma imagem para sua Barraca"
            className="rounded-lg md:rounded-2xl border border-gray-300 px-4 py-2"
            id="image"
            value={image} 
            onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <button className="hover:bg-neutral-500 bg-neutral-800 cursor-pointer rounded-lg p-1 md:px-4 md:py-2 text-white transition" type='submit'>Cadastrar</button>

        </form>
  )
}

export default Formulario