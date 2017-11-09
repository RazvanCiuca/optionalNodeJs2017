const Standup = require('../models/standup.server.model.js');

exports.createNote = function(req, res) {
    const entry = new Standup({
        memberName: req.body.memberName,
        project: req.body.project,
        workYesterday: req.body.workYesterday,
        workToday: req.body.workToday,
        impediment: req.body.impediment
    });

    entry.save();
    console.log(entry);

    res.redirect(301, '/');
};

exports.getNote = function(req, res) {
    res.render('newNote', {title: 'Standup - New Note'});
};

exports.listNotes = function(req, res) {
    const query = Standup.find();
    console.debug('xxxx', query);
    query.sort({createdOn: 'desc'}).limit(10).exec(function(err, results) {
        res.render('index', {title: 'Standup - List', notes: results})
    });

};