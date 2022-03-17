const router = require('express').Router()

router.get('/clientes', (req, res) => {

    res.send({
        ok: 123
    })

})

module.exports = router