'use strict'

const api = require('express').Router()
const { Student, Campus } = require('../../db/models')

api.get('/', (req, res, next) => {
  Student.findAll()
    .then(students => res.json(students))
    .catch(next)
})

api.get('/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;
  Student.findOne({
    where: {id: studentId},
    include: {model: Campus, as: 'campus'}})
    .then(student => res.json(student))
    .catch(next)
})

api.post('/', (req, res, next) => {
  Student.create(req.body)
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
