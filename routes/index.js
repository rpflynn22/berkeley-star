var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('carousel');
});

/* GET tickets coming soon page. */
router.get('/tickets-coming-soon', function(req, res) {
  res.render('tickets-coming-soon');
});

module.exports = router;
