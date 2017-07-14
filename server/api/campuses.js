'use strict'

const api = require('express').Router()
const { Student, Campus } = require('../../db/models')

api.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json(campuses))
    .catch(next)
})

api.get('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campus.findOne({
    where: {id: campusId },
    include: {model: Student}})
    .then(campus => res.json(campus))
    .catch(next)
})

api.post('/', (req, res, next) => {
  Campus.create(req.body)
  .then(newCampus => {
    res.json(newCampus);
  })
  .catch(next)
})

api.put('/:campusId', (req, res, next) => {
  Campus.update(req.body, {
    where: {id: req.params.campusId},
    returning: true
  })
  .then(updatedStudent => {
    res.json(updatedStudent)
  })
  .catch(next)
})

api.delete('/:campusId', (req, res, next) => {
  Campus.destroy({
    where: {id: req.params.campusId}
  })
  .then(deletedCampus => {
    res.json(deletedCampus)
  })
  .catch(next)
})

module.exports = api
