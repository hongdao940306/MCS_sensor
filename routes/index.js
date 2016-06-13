var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Moisture Network' });
});


/* GET figure page. */
router.get('/figure', function(req, res) {


  res.render('figure', { title: 'Figure' });
});

module.exports = router;
