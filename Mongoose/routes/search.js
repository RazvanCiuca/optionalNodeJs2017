const express = require('express');
const router = express.Router();
const searchCtrl = require('../controllers/search.controller.js');

/* GET home page. */
router.get('/search', function(req, res) {
    return searchCtrl.searchNotes(req, res);
});

module.exports = router;
