const express = require('express');
const router = express.Router();
const controller = require('../controllers/test.controller'); /*RUTA DEL CONTROLADOR*/
const path = 'modelo'; /*NOMBRE DEL PATH DEL CONTROLADOR*/

// CRUD  Routes

// Route: findAll
router.get(`/${path}`, controller.findAll)
// Route: findOne
router.get(`/${path}/:id`, controller.findOne)
// Route: create
router.post(`/${path}`, controller.create)
// Route: update
router.put(`/${path}/:id`, controller.update)
// Route: deleteOne
router.delete(`/${path}/:id`, controller.deleteOne)


module.exports = router;