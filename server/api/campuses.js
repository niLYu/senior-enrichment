'use strict'

const api = require('express').Router()
const { Campus } = require('../../db/models')

api.get('/', (req, res, next) => {
  Campus.findAll()
    .then(campuses => res.json({
      message: 'all campuses',
      campuses
    }))
    .catch(next)
})

api.get('/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campus.findById({ campusId })
    .then(campus => res.json({
      message: 'one campus',
      campus
    }))
    .catch(next)
})

api.post('/', (req, res, next) => {
  Campus.findOrCreate({
    where: {
      campusName: req.body.campusName,
      image: req.body.image
    }
  })
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

module.exports = api
