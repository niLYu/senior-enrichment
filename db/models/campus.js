'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Campus = db.define('campus', {
  campusName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  image: {
    type: Sequelize.STRING
  }
})

module.exports = Campus;

