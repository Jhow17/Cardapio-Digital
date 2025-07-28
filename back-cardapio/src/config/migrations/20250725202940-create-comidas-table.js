'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        await queryInterface.createTable('comidas', {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4, 
        primaryKey: true,
        allowNull: false
      },
      barraca_id: { 
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: 'barracas', key: 'id' }, 
        onUpdate: 'CASCADE', 
        onDelete: 'CASCADE'  
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT, 
        allowNull: true
      },
      price: {
        type: Sequelize.DECIMAL(10, 2), 
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.dropTable('comidas');
  }
};
