'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turma extends Model {
    static associate(models) {}
  }
  Turma.init({
    descricao: DataTypes.STRING,
    inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turma',
  });
  Turma.associate = function(models) {
    Turma.belongsTo(models.Usuario, {
    foreignKey: 'id_usuario'
    })
    Turma.belongsTo(models.Nivel, {
      foreignKey: 'id_nivel'
    })
    Turma.hasMany(models.Matricula, {
      foreignKey: 'id_matricula'
    })
  }
  return Turma;
};