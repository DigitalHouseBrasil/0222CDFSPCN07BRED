'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    static associate(models) {}
  }
  
  Usuario.init({
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    papel: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuario',
  });

  Usuario.associate = function(models) {
    Usuario.hasMany(models.Turma, {
      foreignKey: 'id_usuario'
    }),
    Usuario.hasMany(models.Matricula, {
      foreignKey: 'id_usuario'
    })
  }
  return Usuario;
};