const ComicController = {
    index: (req, res) =>{
        // const hq = comicService.gethq (req.params.id)

        res.render('comicPage')
    }
}

module.exports = ComicController;