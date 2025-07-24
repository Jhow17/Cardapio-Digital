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
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Acarajé da Baiana',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA BAHIANA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Burguer do Chef',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "HAMBURGUERIA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Pizzaria Napolitana',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "PIZZARIA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Temaki Express',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA JAPONESA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Doces da Vovó',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "DOCES E SOBREMESAS"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Esfiha Árabe Autêntica',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA ÁRABE"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Churrasquinho do Zé',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "CHURRASCO"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Tapiocaria da Roça',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA NORDESTINA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Massas Italianas da Nona',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA ITALIANA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Café com Arte',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "CAFETERIA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Crepe Francês Saboroso',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "CREPERIA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Sucos Naturais do Pomar',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "BEBIDAS SAUDÁVEIS"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Cantinho Mineiro',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA BRASILEIRA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Cachorro Quente Gourmet',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "LANCHES RÁPIDOS"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Sushi Prime',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "COMIDA JAPONESA"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Bolo da Confeiteira',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "DOCES E SOBREMESAS"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Frutos do Mar Frescos',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "FRUTOS DO MAR"
    },
    {
        id: crypto.randomUUID(), // ID gerado aqui!
        name: 'Coxinha da Hora',
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPtzHJEXKvgiadk3GdDVm3jCe8X3s2xk9e4w&s",
        categoria: "SALGADOS"
    }
    ];

        const createdBarracas = [];
        let errorOccurred = false;

        try {
            // Opcional: Limpar a tabela antes de popular
            // CUIDADO: Isso apaga todos os dados existentes na tabela 'barracas'
            // await Barraca.destroy({ truncate: true });

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