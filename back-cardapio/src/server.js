import express, { json } from 'express'
import router from './routes.js'
import Barraca from './models/Barraca.js'
import Comida from './models/Comida.js'
import { Sequelize } from 'sequelize'
import cors from 'cors'
import config from './config/database.js'
const app = express()
const port = process.env.PORT || 3001;

// middleware para escutar json
app.use(express.json())

// isso cria o middleware cors e deixa que todasas portas usem o cors 
app.use(cors());

// esse é o coraçao da conexao com banco de dados usando Sequelize
const sequelize = new Sequelize(config)

Barraca.init(sequelize)
Comida.init(sequelize)

// Configura as associacoes
Barraca.associate(sequelize.models);
Comida.associate(sequelize.models); 

// quando tiver uma requisiçao em barracas
app.use('/barracas', router)


// para verificar se a conexao deu certo
sequelize.authenticate().then( ()=> {
  console.log('Banco Conectado')
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}).catch((erro) => {console.log('Ferro de Vez')})


