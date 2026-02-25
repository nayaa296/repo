var express = require('express');
const res = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', 
    { 
      title: 'HAFIZHAH',
      wapres: 'Gibran'
    });
});

router.get('/informasi', function (req, res, next) {
  res.render('informasi', 
    {
    judul : 'Halaman Informasi'
    });
});

module.exports = router;
