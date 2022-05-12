const express = require('express');
const router = express.Router();
const controller = require('../controllers/change.controller');
const path = 'change';

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