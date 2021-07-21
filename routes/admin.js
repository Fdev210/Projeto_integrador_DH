const express = require('express');
const router = express.Router();

const AdminController = require('../controller/AdminController');
const ComicController = require('../controller/ComicController');

/* GET home page. */

router.get('/:id', AdminController.admin)


module.exports = router;