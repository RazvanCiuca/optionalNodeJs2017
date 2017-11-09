const Standup = require('../models/standup.server.model.js');

exports.createNote = function(req, res) {
    console.log(req.body)
    const entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediments
    });

    entry.save();

    res.redirect(301, '/');
};

exports.getNote = function(req, res) {
    res.render('newNote', {title: 'Standup - New Note'});
};

exports.listNotes = function(req, res) {
    const query = Standup.find();
    query.sort({createdOn: 'desc'}).limit(10).exec(function(err, results) {
        res.render('index', {title: 'Standup - List', notes: results})
    });

};