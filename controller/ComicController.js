const ComicController = {
    index: (req, res) =>{
        res.render('comicPage', {usuario: req.session.usuario})
    }
}

module.exports = ComicController;