'use strict';
module.exports = (sequelize, DataTypes) => {
  const Accommodation = sequelize.define('Accommodation', {
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    location: DataTypes.STRING,
    image: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Accommodation.associate = function(models) {
    Accommodation.hasMany(models.Review, { foreignKey: "accommodationId"})
    Accommodation.hasMany(models.Booking, { foreignKey: "accommodationId"})
  };
  return Accommodation;
};