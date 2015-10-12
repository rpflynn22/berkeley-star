var express = require('express');
var router = express.Router();
var auditionsUsername = process.env.AUDITIONS_USERNAME;
var auditionsPassword = process.env.AUDITIONS_PASSWORD;

/* GET home page. */
router.get('/', function(req, res) {
  res.render('carousel');
});

/* GET sponsors page. */
router.get('/sponsors', function(req, res) {
  res.render('sponsors');
});

/* GET staff page. */
router.get('/staff', function(req, res) {
  res.render('staff');
});

/* GET audition form page. */
router.get('/audition', function(req, res) {
	res.render('audition');
});

module.exports = router;
