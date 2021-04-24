const express = require('express');
const router = express.Router();

const AdminController = require('../controller/AdminController');

/* GET home page. */
router.get('/', AdminController.index)


module.exports = router;