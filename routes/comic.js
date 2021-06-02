const express = require('express');
const router = express.Router();

const ComicController = require('../controller/ComicController');

/* GET home page. */
// router.get('/', ComicController.index)
// router.get('/:id', ComicController.readComic)
router.get('/:id', ComicController.findAssociation)
router.put('/:id', ComicController.updateComic)
router.delete('/:id', ComicController.deleteComic)


module.exports = router;