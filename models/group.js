'use strict';
module.exports = function(sequelize, DataTypes) {
  var Group = sequelize.define('Group', {
    group_name: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  });

  

  return Group;
};
