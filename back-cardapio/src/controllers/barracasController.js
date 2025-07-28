import Barraca from "../models/Barraca.js"
import crypto from 'node:crypto'
class BarracaController {

    static async createBarraca  (req, res) {
        const barracaCreate = {
            id: crypto.randomUUID(),
            name: req.body.name,
            imagem: req.body.imagem,
            categoria : req.body.categoria

        }
        const barraca = await Barraca.create(barracaCreate)
       
        res.status(201).json({message : "Barracas", criado : barraca})
}

    static async getBarracas  (req, res) {
        // findAll
        try {
             const barracas = await Barraca.findAll()
            res.status(200).json({message : barracas})
        }catch(e){

            res.status(400).json({message : `Erro: ${e}` })
        }
       
}
    static async deleteBarraca  (req, res) {
        try{
            const deletado = await Barraca.destroy({
            where : {
                id : req.params.id
                }
            })
            res.status(200).json({message : "Apaga as Barracas", apagada : deletado})

        }catch(e){
            res.status(400).json({message : `Erro: ${e}`})

    }  
}
    static async populateBarracas(req, res) {


    const barracasData = [
   
    ];

        const createdBarracas = [];
        let errorOccurred = false;

        try {
            
            // Itera sobre cada item do array barracasData
            for (const barracaItem of barracasData) {
                try {
                    // Usa Barraca.create para cada item
                    const newBarraca = await Barraca.create(barracaItem);
                    createdBarracas.push(newBarraca);
                } catch (itemError) {
                    console.error(`Erro ao inserir a barraca "${barracaItem.nome}":`, itemError.message);
                    errorOccurred = true;
                    // Se você quiser parar a inserção no primeiro erro, adicione um 'break;' aqui.
                    // Caso contrário, ele tentará inserir os próximos itens.
                }
            }

            if (errorOccurred) {
                return res.status(500).json({
                    message: "Concluído com erros: Algumas barracas não puderam ser inseridas.",
                    insertedCount: createdBarracas.length,
                    insertedBarracas: createdBarracas,
                    // O erro específico do item não é facilmente propagado para o res.json
                    // mas o console.error acima já ajuda na depuração.
                });
            } else {
                return res.status(200).json({
                    message: "Banco de dados de barracas populado com sucesso!",
                    count: createdBarracas.length,
                    barracas: createdBarracas
                });
            }

        } catch (mainError) {
            // Este catch é para erros que ocorram FORA do loop (ex: Barraca.destroy)
            console.error("Erro geral ao popular banco de dados de barracas:", mainError);
            return res.status(500).json({ message: "Erro geral ao popular banco de dados de barracas.", error: mainError.message });
        }
    }

}

export default BarracaController

// secretpassword