const express = require('express');
const router = express.Router();

const ComicController = require('../controller/ComicController');

/* GET home page. */
router.get('/', ComicController.index)


module.exports = router;