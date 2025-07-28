import Sequelize, {Model} from 'sequelize'

class Barraca extends Model{
    static init(sequelize){
        // vamos passar para ele a modelagem dos dados o Segundo sao as configuraçoes e a Primeira é o Modelo dos dados
        super.init({
            name : {
                type : Sequelize.STRING,
                allowNull : false
          },
          imagem :{
                type: Sequelize.STRING,
                allowNull : false
          },
          categoria :{
                type: Sequelize.STRING,
                allowNull : false
          },}
            
            ,{sequelize,
            tableName: 'barracas',
            timestamps: true})


    }
    static associate(models){
        this.hasMany(models.Comida, { foreignKey: 'barraca_id', as: 'comidas' })
    }
}

export default Barraca