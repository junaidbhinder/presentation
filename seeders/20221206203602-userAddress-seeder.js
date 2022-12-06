'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('UserSqlAddresses', [{
     country: 'pakistan',
      city: 'Lahore',
      street: 'Ittefaq Hospital',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
      }]);
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('UserSqlAddresses', null, {})
  }
};
