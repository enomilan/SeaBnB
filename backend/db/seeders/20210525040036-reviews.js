'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Reviews', [ 
        
        {
          userId: 2,
          accomodationId: 2,
          review: "Great location, right next to the beach",
          score: 5,
          createdAt: new Date(),
          updatedAt: new Date()
          },
          {
            userId: 4,
            accomodationId: 3,
            review: "The view was incredible",
            score: 5,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
              userId: 3,
              accomodationId: 4,
              review: "Noisy, and not as close to the beach",
              score: 2,
              createdAt: new Date(),
              updatedAt: new Date()
              },
              {
                userId: 6,
                accomodationId: 1,
                review: "Affordable, lots of activities",
                score: 5,
                createdAt: new Date(),
                updatedAt: new Date()
                },            

    ], {});
  
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
