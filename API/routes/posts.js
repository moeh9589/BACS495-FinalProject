



var express = require('express');
var router = express.Router();


var posts = [
    {"title": "test1", "body": "test1body"},
    {"title": "test2", "body": "test2body"},
    {"title": "test3", "body": "test3body"},
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json(posts);
});

module.exports = router;