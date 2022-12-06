'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
 
     const data= queryInterface.bulkInsert('usersqls', [{
      firstName: 'ali',
      lastName: 'raza',
      email: 'ali@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
   
     await queryInterface.bulkDelete('usersqls', null, {});
  }
};
