var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('carousel');
});

/* GET artists. */
router.get('/artists', function(req, res) {
	res.render('artists');
});

/* GET Top 12 finalist info. */
router.get('/top-12', function(req, res) {
	res.render('top-12');
});

module.exports = router;
