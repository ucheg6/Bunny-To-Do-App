'use strict';
module.exports = (sequelize, DataTypes) => {
  const User_Tasks = sequelize.define('User_Tasks', {
    id: DataTypes.INTEGER,
    description: DataTypes.STRING,
    state: DataTypes.ENUM,
    user_id: DataTypes.INTEGER
  }, {});
  User_Tasks.associate = function(models) {
    // associations can be defined here
    User_Tasks.belongsTo(models.User, {
      foreignKey: 'user_Id',
      as: 'task_owner',
      onDelete: 'CASCADE',
    })
  };
  return User_Tasks;
};