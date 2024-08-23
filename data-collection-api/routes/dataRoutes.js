// Defines routes for the API

const express = require('express');
const { createData, getData, getDataById, updateData, deleteData } = require('../controllers/dataController');
const router = express.Router();

router.post('/data', createData);
router.get('/data', getData);
router.get('/data/:id', getDataById);
router.put('/data/:id', updateData);
router.delete('/data/:id', deleteData);

module.exports = router;
