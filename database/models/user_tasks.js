'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Tasks = sequelize.define('User_Tasks', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    description: DataTypes.STRING,
    state:{ 
      type: DataTypes.ENUM('to_do', 'done'),
      defaultValue: 'to_do'
    },
    user_id: DataTypes.INTEGER
  }, {});
  User_Tasks.associate = function(models) {
    // associations can be defined here
    User_Tasks.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'task_owner',
      onDelete: 'CASCADE',
    })
  };
  return User_Tasks;
};