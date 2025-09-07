import React,{useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'

const Upload = () => {
    const [selecFile, setSelectedFile] = useState(null)
    const { id } = useParams();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const manipulaFile = (event) => {
        if(event.target.files && event.target.files[0]){
            setSelectedFile(event.target.files[0])
        }
        else{
            //para o disable
            setSelectedFile(null)
        }
    }
    
    const manipulaUpload = async (event) => {
        event.preventDefault()

        const formData = new FormData()
        formData.append('cardapioCsv', selecFile)
        try {
            const response = await axios.post(
                `${backendUrl}/barracas/cardapio/${id}`, 
                formData,{
                    headers: {
                    'Content-Type': 'multipart/form-data',}
                });

            console.log('Upload bem-sucedido:', response.data);
            alert('Documento enviado com sucesso!');
            setSelectedFile(null); } 
            catch (error) {
                console.error('Erro no upload:', error.response ? error.response.data : error.message);
                alert('Erro ao enviar documento. Verifique o console.');}
            }
    
  return (
    <form onSubmit={manipulaUpload} className="upload-form">
      <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white p-4" for="file_input">Upload file</label>
      <input id="file_input" type="file" class="w-1/2 block mx-auto text-slate-500 font-medium text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded" onChange={manipulaFile} />
      {selecFile && <p>Arquivo selecionado: {selecFile.name}</p>}
      <button className='bg-rose-800  text-white font-semibold rounded-md p-2' type="submit" disabled={!selecFile}>
        Fazer Upload
      </button>
    </form>
  )
}

export default Upload