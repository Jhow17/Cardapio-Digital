'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.createTable('barracas', { 
          id:
          { 
            type : Sequelize.UUID,
            primaryKey : true,
            defaultValue : Sequelize.UUIDV4
          } ,
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
          },
          updated_at:{
            type : Sequelize.DATE,
            allowNull : false
          },
          created_at:{
            type : Sequelize.DATE,
            allowNull : false
          }

      });

  },

  // metodo se der errado
  async down (queryInterface, Sequelize) {
   
      await queryInterface.dropTable('barraca');
     
  }
};
