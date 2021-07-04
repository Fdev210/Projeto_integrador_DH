const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authO = require('../middlewares/authO');

const ComicController = require('../controller/ComicController');

/* GET home page. */

router.get('/', ComicController.readComic);
router.get('/:id', ComicController.readComic);
//router.get('/:id', auth, ComicController.readComic);
router.get('/preferencias/:id', auth, authO, ComicController.findAssociation);
router.put('/:id', auth, authO, ComicController.updateComic);
router.delete('/:id', auth, authO, ComicController.deleteComic);


module.exports = router; 