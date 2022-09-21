'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matricula extends Model {
    static associate(models) {}
  }
  Matricula.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Matricula',
  });
  Matricula.associate = function(models) {
    Matricula.belongsTo(models.Usuario, {
      foreignKey: 'id_usuario'
    })
    Matricula.belongsTo(models.Turma, {
      foreignKey: 'id_turma'
    })
  }
  return Matricula;
};