'use strict';
const { DataTypes } = require("sequelize")
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('categoria_produto', { 
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }
  );

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('categoria_produto');

  }
};
