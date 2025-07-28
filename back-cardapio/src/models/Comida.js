import Sequelize,{Model} from "sequelize";

class Comida extends Model{
    static init(sequelize){
        super.init({
            id : {
                type : Sequelize.UUID,
                allowNull : false,
                primaryKey : true,
                defaultValue : Sequelize.UUIDV4
            },
             barraca_id: { 
                type: Sequelize.UUID,
                allowNull: false 
            },
            name : {
                type : Sequelize.STRING,
                allowNull : false
            },
            description : {
                type : Sequelize.TEXT,
                allowNull : false
            },
            price : {
                type : Sequelize.DECIMAL(10, 2),
                allowNull : false
            },}
            ,{sequelize,
            tableName: 'comidas', 
            timestamps: true })
    }
    static associate(models){
        this.belongsTo(models.Barraca, { foreignKey: 'barraca_id', as: 'barraca' });

    }
}
export default Comida