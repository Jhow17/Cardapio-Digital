import express, { json } from 'express'
import router from './routes.js'
import Barraca from './models/Barraca.js'
import { Sequelize } from 'sequelize'
import cors from 'cors'
import config from './config/database.js'
const app = express()
const port = 3001

// middleware para escutar json
app.use(express.json())

// isso cria o middleware cors e deixa que todasas portas usem o cors 
app.use(cors());

// esse é o coraçao da conexao com banco de dados usando Sequelize
const sequelize = new Sequelize(config)

Barraca.init(sequelize)

// quando tiver uma requisiçao em barracas
app.use('/barracas', router)


// para verificar se a conexao deu certo
sequelize.authenticate().then( ()=> {
  console.log('Banco Conectado')
  app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}).catch((erro) => {console.log('Fudeu de Vez')})


