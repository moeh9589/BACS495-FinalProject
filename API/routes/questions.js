var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    const question = {
        'subject': req.body.subject,
        'qbody': req.body.qbody,
        'answer': req.body.answer
    }
    console.log("###################");

    var db = req.app.locals.db;
    db.collection('questions').insertOne(question);
    res.json({"message": "Question posted"});

    });

    module.exports = router;