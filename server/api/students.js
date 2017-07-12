'use strict'

const api = require('express').Router()
const { Student } = require('../../db/models')

api.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json({
      message: 'all students',
      students
    }))
    .catch(next)
})

api.get('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;
  Student.findById( studentId )
    .then(student => res.json({
      message: 'one student',
      student
    }))
    .catch(next)
})

api.post('/', (req, res, next) => {
  console.log(req.body);
  Student.findOrCreate({
    where: {
      name: req.body.name,
      email: req.body.email
    }
  })
  .then(newStudent => {
    res.json(newStudent);
  })
  .catch(next)
})

api.put('/:studentId', (req, res, next) => {
  Student.update(req.body, {
    where: {id: req.params.studentId},
    returning: true
  })
  .then(updatedStudent => {
    res.json(updatedStudent)
  })
  .catch(next)
})

api.delete('/:studentId', (req, res, next) => {
  Student.destroy({
    where: {id: req.params.studentId}
  })
  .then(deletedStudent => {
    res.json(deletedStudent)
  })
  .catch(next)
})

module.exports = api
