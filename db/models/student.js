'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')

var Student = db.define('student', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: {
      msg: 'A user with this email address already exists.'
    },
    validate: {
      isEmail: {
        msg: 'Please enter a valid email address.'
      }
    }
  }
})

module.exports = Student;

