

function index(req, res) {
    res.render('index', {
        title: 'Página inicial'
    })
}


module.exports = {
    index,
}