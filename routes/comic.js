const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');

const ComicController = require('../controller/ComicController');

/* GET home page. */

router.get('/:id', auth, ComicController.readComic)
router.get('/preferencias/:id', ComicController.findAssociation)
router.put('/:id', ComicController.updateComic)
router.delete('/:id', ComicController.deleteComic)


module.exports = router; 