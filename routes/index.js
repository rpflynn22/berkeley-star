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

module.exports = router;
