var express = require('express');
var router = express.Router();
var Audition = require('../models/audition_model');
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

/* POST to add an audition. */
router.post('/audition', function(req, res) {
  console.log(req.body.firstName);
  var audition = new Audition({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    year: req.body.year,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    auditionLink: req.body.auditionLink
  });
  audition.save(function(err) {
    if (err) {
      res.status(500).end();
      
    }
    res.status(200).render('audition-submission');
  });
});

router.get('/all-auditions', function(req, res) {
  res.render('all-auditions-authentication');
});

router.post('/auditions-authentication', function(req, res) {
  if (req.body.username == auditionsUsername && req.body.password == auditionsPassword) {
    Audition.find(function(err, auditions) {
  	  if (err) {
  	    res.status(500).end();
  	    return console.error(err);
      }
      console.log
      res.render('all-auditions', {auditions: auditions});
    });
  } else {
  	res.redirect('/all-auditions');
  }
});

router.get('/auditions-authentication', function(req, res) {
  res.redirect('/all-auditions');
});

module.exports = router;
