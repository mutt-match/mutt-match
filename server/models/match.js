'use strict';
module.exports = function(sequelize, DataTypes) {
  var Match = sequelize.define('Match', {
    user: DataTypes.INTEGER,
    dog: DataTypes.INTEGER,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.Match.belongsTo(models.Dog, {foreignKey: 'dog'});
        models.Match.belongsTo(models.User, {foreignKey: 'user'});
      }
    }
  });
  return Match;
};