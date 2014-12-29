var express = require('express');
var router = express.Router();

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

module.exports = router;
