var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    var db = req.app.locals.db;
    var cursor = db.collection("questions").find();
    cursor.toArray().then(c => res.json(c));
    });

router.post('/', function(req, res, next) {
    const question = {
        'id': req.body.id,
        'subject': req.body.subject,
        'qbody': req.body.qbody,
        'answer': req.body.answer
    }
    console.log("###################");

    var db = req.app.locals.db;
    db.collection('questions').insertOne(question);
    res.json({"message": "Question posted"});

    });

router.patch("/", function(req, res, next){
    const question = {
        "id": req.body.id
    }
    var db = req.app.locals.db; 
    db.collection("questions").updateOne(question
                                        , {$set: {"answer": req.body.answer}}
                                        , {upsert: true}); 
    res.json({"message": " - " + req.body.answer + " registered for: " + req.body.id});
});

router.put("/", function(req, res, next) {
    const question = {
        "id": req.body.id
    }
    var db = req.app.locals.db;
    db.collection("questions").updateOne(question
                , {$set: {"votes": req.body.votes}}
                , {upsert: true});  

                res.json({"message": " - " + req.body.votes + " votes registered for: " + req.body.id});
});

    module.exports = router;