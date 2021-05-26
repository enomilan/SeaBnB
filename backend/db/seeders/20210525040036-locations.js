'use strict';
const faker = require('faker');
const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Accommodation', [
        
        {
          name: 'Right by the Sea',
          price: '54',
          description: "Do you like Game of Thrones?  Located in the old town this location is the best value in Dubrovnik",
          location: 'Dubrovnik, Croatia',
          image: 'https://rtwin30days.com/wp-content/uploads/2020/01/Dubrovnik-Croatia-Banje-Beach-820x550.jpg',
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },      
        {
          name: 'Flor-sea-da',
          price: '144',
          description: "Why go to a resort when you can stay at a resort like place",
          location: 'Pensacola, Florida',
          image: 'https://www.planetware.com/photos-large/USFL/florida-pensacola-hilton-pensacola-beach.jpg',
          userId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Crystal Clear',
          price: '34',
          description: "Come and enjoy the crystal clear beaches of Ksamil",
          location: 'Ksamil, Albania',
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/14/b7/68/hotel-moscopole.jpg?w=700&h=-1&s=1',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Boats, Sea n fun',
          price: '455',
          description: "Located on the bay of Portofino, free boat rides to enjoy the Ligurian sea",
          location: 'Portofino, Italy',
          image: 'https://cdn.kimkim.com/files/a/images/13606714a707eab6a43944edd229f48321cf7850/big-34cf3f0b2ba88eacac363424f772ef88.jpg',
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        },                 
        {
          name: "Cote D'azur",
          price: '154',
          description: "This location",
          location: 'Nice, France',
          image: 'https://cdn.turkishairlines.com/m/56e348843f554069/original/1400-660-jpg.jpg',
          userId: 4,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Right by the Sea',
          price: '154',
          description: "This location is on the best island of Italy",
          location: 'Capri, Italy',
          image: 'https://previews.123rf.com/images/erix2005/erix20051712/erix2005171200578/91487849-capri-italy-october-3-2017-tourists-at-street-cafes-on-capri-island-italy.jpg',
          userId: 5,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Island fun',
          price: '420',
          description: "The best place with the best view.  This location is the best on the island",
          location: 'Santorini, Greece',
          image: 'https://s3.eu-west-2.amazonaws.com/luxurylondon.co.uk-storage-bucket-001/images/articles-body/619/santorini-greece-houses.jpg',
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          name: 'Sea the cabin',
          price: '169',
          description: "This cabin is located on a pier.  Enjoy ",
          location: 'Antalya, Turkey',
          image: 'https://www.destinationtips.com/wp-content/uploads/2019/05/Antalya-Turkey-1200x800.jpg',
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },                             
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Accommodation', null, {});
    
  }
};

