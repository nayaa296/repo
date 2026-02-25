var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('kategori',
        {
            judul : 'Kategori no, nama, aksi'
        });
});

module.exports = router;