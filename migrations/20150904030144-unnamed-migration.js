'use strict';

module.exports = {
  up: function (queryInterface, Sequelize, done) {
    done();
  },

  down: function (queryInterface, Sequelize) {
    return new Promise(function (resolve, reject) {
      resolve();
    });
  }
};
