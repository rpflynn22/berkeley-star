var express = require('express');
var router = express.Router();

router.get('/performances', function(req, res) {
  res.render('performances-2014');
});

router.get('/photos', function(req, res) {
  res.render('photos-2014');
});

router.get('/special-guests', function(req, res) {
  res.render('special-guests-2014');
});

router.get('/top-12', function(req, res) {
  res.render('top-12-2014');
});

module.exports = router;
