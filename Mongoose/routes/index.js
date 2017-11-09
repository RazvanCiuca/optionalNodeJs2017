const express = require('express');
const router = express.Router();
const standUpCtrl = require('../controllers/standup.server.controller.js');

/* GET home page. */
router.get('/', function(req, res) {
    return standUpCtrl.listNotes(req, res);
});

router.get('/newNote', function(req, res) {
    return standUpCtrl.getNote(req, res);
});

router.post('/newNote', function(req, res) {
    return standUpCtrl.createNote(req, res);
});

module.exports = router;
