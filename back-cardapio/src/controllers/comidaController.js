import Comida from "../models/Comida.js";
import Barraca from "../models/Barraca.js"
import run from "./processaImagem.js";
import csv from 'csv-parser'; 
import { Readable } from 'stream';

class ComidaController{
    static async getCardapio(req, res){
         try {
             const comidas = await Comida.findAll({
                  where : {
                barraca_id : req.params.id
                }
             })
            res.status(200).json({message : comidas})
        }catch(e){

            res.status(400).json({message : `Erro: ${e}` })
        }
    }
    static async createComida (req, res) {
        console.log(req.body)
        const comidaCreate = {
            barraca_id: req.body.b_id,
            name: req.body.name,
            description: req.body.description,
            price : req.body.price,          
        }
        const comida = await Comida.create(comidaCreate)
       
        res.status(201).json({message : "Barracas", criado : comida})
}   
 

    static async createCardapio (req, res) {
        const barracaId = req.params.id
        console.log(req.file)

        try{
            const existeBarraca = await Barraca.findByPk(barracaId)
            if(!existeBarraca){
                return res.status(400).json({ message: "Barraca não encontrada" })
            }
            if (!req.file || (req.file.mimetype !== 'text/csv' && req.file.mimetype !== 'application/vnd.ms-excel')){
                return res.status(400).json({ message: "Insira um arquuivo csv" })
            }
            const bufferStorage = req.file.buffer
            const listaConvertida =  []

            //tirando do buffer
            const streamCSV = Readable.from(bufferStorage.toString('utf8'));
            await new Promise((resolve, reject) => {
                streamCSV
                    .pipe(csv()) 
                    // cada row vai ter nome comida; preco; descriçao 
                    .on('data', (row) => {
                        listaConvertida.push({
                            nome: row['name'],      
                            preco: parseFloat(row['price']),  
                            descricao: row['description'] || '' 
                        });
                    })
                    .on('end', () => {
                        resolve();
                    })
                    .on('error', (err) => {
                        console.error('Erro ao parsear CSV:', err);
                        parserError = err;
                        reject(err);
                    });
            });
             if (listaConvertida.length === 0) {
                return res.status(400).json({ message: 'Nenhum item de cardápio válido encontrado no arquivo CSV.' });
            }
            const comidasCreated = [];
            
            for (const comida of listaConvertida){
                const comidaCreate = {
                        barraca_id: barracaId,
                        name: comida.nome,
                        description: comida.descricao,
                        price: comida.preco,
                    };
                    const comidaCriada =  await Comida.create(comidaCreate);
                    comidasCreated.push(comidaCriada)
            }

           return res.status(201).json({
                    message: "Cardápio processado e todos os itens criados", 
                    count: comidasCreated.length, created: comidasCreated});

        }catch(error){
            console.error('Ferro Geral:', error);
            return res.status(500).json({ message: "Erro servidor com o cardápio CSV.", error: error.message });

        }
} 

}

export default ComidaController