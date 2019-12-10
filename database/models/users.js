'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    Id: DataTypes.INTEGER,
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