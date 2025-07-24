import React, { useState } from 'react'
import axios from 'axios'

const Formulario = () => {
    const [valorSelec, setValorSelec] = useState('')
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const opcoes =  ['Espetinhos','Porções','Lanches','Bolos/Docês','Pastéis', 'Outros']
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            name : title,
            imagem : image,
            categoria : valorSelec
          }
        try {
            const response =  await axios.post("http://192.168.0.18:3001/barracas/cadastro", data)
            console.log('Barraca criada com sucesso:', response.data)
            alert('Barraca cadastrada com sucesso!'); // Use um modal ou notificação real em vez de alert
        }catch(error){
            console.error('Erro ao cadastrar barraca:', error.response ? error.response.data : error.message)

        }


    }
  return (
    <form onSubmit={handleSubmit} className="bg-neutral-50 flex w-1/2 mx-auto flex-col gap-6 px-8">
        <div className="flex  flex-col gap-1">
            <label htmlFor="title" className="ml-2 text-2xl font-bold">
                Nome da Barraca
            </label>
            <input
            type="text"
            placeholder="Digite o nome da sua Barraca"
            className="rounded-2xl border border-gray-300 px-4 py-2"
            id="title"
            value={title} 
            onChange={(e) => setTitle(e.target.value)}
            />
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="categoriaRadio" className="ml-2 text-2xl font-bold">
                Coloque a Categoria que mais se enquadre na Barraca
            </label>
            {opcoes.map((opcao) => (
            <div key={opcao} className="flex items-center"> 
                <input
                    type="radio"
                    id= "categoria"
                    name="categoria" 
                    value={opcao}
                    checked={valorSelec === opcao}
                    onChange={(e) => setValorSelec(e.target.value)}
                    className="mr-2"
                />
                <label htmlFor={`categoria-${opcao}`} className="text-xl"> 
                    {opcao}
                </label>
            </div>
            
    ))}
        </div>
        <div className="flex flex-col gap-1">
            <label htmlFor="title" className="ml-2 text-2xl font-bold">
                Imagem
            </label>
            <input
            type="text"
            placeholder="Digite o endereço de uma imagem para sua Barraca"
            className="rounded-2xl border border-gray-300 px-4 py-2"
            id="image"
            value={image} 
            onChange={(e) => setImage(e.target.value)}
            />
        </div>
        <button className="hover:bg-neutral-500 bg-neutral-800 min-w-44 cursor-pointer rounded-full px-4 py-2 text-white transition" type='submit'>Cadastrar</button>

        </form>
  )
}

export default Formulario