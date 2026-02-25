var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('mbg/index',
        {
            judul : 'Makanan Bergizi Gratis'
        });
});

module.exports = router;