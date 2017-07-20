'use strict';
module.exports = function(sequelize, DataTypes) {
  var UserToUser = sequelize.define('UserToUser', {
    UserId_1: DataTypes.INTEGER,
    UserId_2: DataTypes.INTEGER,
    chat: DataTypes.STRING
  });

  UserToUser.associate = models => {
    // UserToUser.belongsTo(models.User, { as: 'UserId_1a', foreignKey: 'UserId_1' })
    // UserToUser.belongsTo(models.User, { as: 'UserId_2a', foreignKey: 'UserId_2' })
  }

  return UserToUser;
};
