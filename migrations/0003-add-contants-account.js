'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
      return queryInterface.addColumn(
          'Constants',
          'ccAccountId',
          {
              type: Sequelize.STRING
          }
      );
  },

  down: function(queryInterface, Sequelize) {
      return queryInterface.removeColumn(
          'Constants',
          'ccAccountId'
      );
  }
};