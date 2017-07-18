const express = require('express');
const router = express.Router();
const Campaign = require('../models/campaign');

/* GET home page. */
router.get('/', function(req, res, next) {
  // New
  Campaign
    .find({})
    .populate('creator')
    .exec( (err, campaigns) => {
        res.render('index', { campaigns });
    });
});

module.exports = router;
