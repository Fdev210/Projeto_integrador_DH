const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const authO = require('../middlewares/authO');
const validador = require('../middlewares/Validador');

const ComicController = require('../controller/ComicController');

/* GET home page. */

// router.get('/', ComicController.readComic);
router.get('/', ComicController.index)
router.get('/:id', ComicController.readComic);
router.get('/comicpdf/:id', ComicController.readPdf)
router.get('/preferencias/:id', /*auth, authO,*/ ComicController.findAssociation);
router.put('/:id', /*auth, authO,*/ ComicController.updateComic);
router.delete('/:id', /*auth, authO,*/ ComicController.deleteComic);
router.post('/', /*auth, authO,*/ validador.validador_comic, ComicController.storeComic)

module.exports = router;  