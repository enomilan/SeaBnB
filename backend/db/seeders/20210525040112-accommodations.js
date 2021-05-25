'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Accommodation', [
        
        {
          name: 'Right by the Sea',
          price: '54',
          description: "This location",
          location: 'Dubrovnik, Croatia',
          image: '../',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },      
        {
          name: 'Flor-sea-da',
          price: '144',
          description: "This location",
          location: 'Destin, Florida',
          image: 'insertImageHere',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Crystal Clear',
          price: '154',
          description: "This location",
          location: 'Ksamil, Albania',
          image: 'insertImageHere',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Right by the Sea',
          price: '454',
          description: "This location",
          location: 'Portofino, Italy',
          image: 'insertImageHere',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },                 
        {
          name: 'Right by the Sea',
          price: '154',
          description: "This location",
          location: 'Nice, France',
          image: 'insertImageHere',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Right by the Sea',
          price: '154',
          description: "This location",
          location: 'Sorrento, Italy',
          image: 'insertImageHere',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Right by the Sea',
          price: '154',
          description: "This location",
          location: 'Santorini, Greece',
          image: 'insertImageHere',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Right by the Sea',
          price: '154',
          description: "This location",
          location: 'Antalya, Turkey',
          image: 'insertImageHere',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },                             
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Accommodation', null, {});
    
  }
};
