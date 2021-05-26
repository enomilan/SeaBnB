'use strict';
module.exports = (sequelize, DataTypes) => {
  const Booking = sequelize.define('Booking', {
    userId: DataTypes.INTEGER,
    accommodationId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Booking.associate = function(models) {
    Booking.belongsTo(models.Accomodation, { foreignKey: "accomodationId" });
    Booking.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Booking;
};