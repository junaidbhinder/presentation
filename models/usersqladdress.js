'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserSqlAddress extends Model {
   
    static associate(models) {
    
    }
  }
  UserSqlAddress.init({
    country: DataTypes.STRING,
    city: DataTypes.STRING,
    street: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserSqlAddress',
  });
  return UserSqlAddress;
};