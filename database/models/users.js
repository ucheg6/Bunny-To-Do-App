'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Name: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.User_Tasks, {
      foreignKey: 'user_id',
      as: 'tasks',
      onDelete: 'CASCADE',
    });
  };
  return User;
};