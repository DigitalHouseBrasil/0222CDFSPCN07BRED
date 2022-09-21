'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nivel extends Model {
    static associate(models) {}
  }
  Nivel.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nivel',
  });
  Nivel.associate = function(models) {
    Nivel.hasMany(models.Turma, {
      foreignKey: 'id_nivel'
    })
  }
  return Nivel;
};