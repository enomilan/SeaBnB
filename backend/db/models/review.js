'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    accommodationId: DataTypes.INTEGER,
    review: DataTypes.TEXT,
    score: DataTypes.INTEGER
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.Accommodation, { foreignKey: "accommodationId" });
    Review.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Review;
};