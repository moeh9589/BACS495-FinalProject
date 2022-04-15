var express = require('express');
var router = express.Router();

class User {
  constructor(id, name, password) {
    this.id = id;
    this.name = name;
    this.password = password;
  }
}

var users = [];
for (let i = 0; i < 3; i++) {
  const user = new User(i + 1, "testname" + String(i+1), "123123");
  users.push(user);
}



router.get('/', function(req, res, next) {
  res.send(users);

  for (let user of users) {
    console.log(user.id, user.name, user.password);
  }
});


router.get('/:id', function(req, res, next) {
var id = req.params.id;

for (let user of users) {
  if (user.id == id) {
    res.json(user);
    console.log(user.name + " " + user.id);
  }
}
res.send("Cannot find user");
});


router.delete('/:id', function(req, res, next) {
var id = req.params.id;

for (let user of users) {
  if (user.id == id) {
      const index = users.indexOf(user);
      users.splice(index, 1);
      console.log("user: " + user.name + " deleted.");
      res.json(user);

  }
}
res.send("Cannot find user");
});

router.put('/:id/:updatedname', function(req, res, next) {
  var inlist = false;
  var id = req.params.id;
  var newname = req.params.updatedname;

  for (let user of users) {
      if (id == user.id) {
          inlist = true;
          res.send("Id found in list of users")
      }
  }

  if (inlist) {
      for (let user of users) {
          if (user.id == id) {
              user.name = newname;
              res.send("Updated user" + user.id);
          }
      }
  }

//res.send("Cannot find user");
});

router.post('/', function(req, res, next) {
  const user = {
    'name': req.body.name,
    'email': req.body.email,
    'password': req.body.password
  }
  console.log(user);

  var db = req.app.locals.db;
  db.collection('users').insertOne(user);
  res.json({"message": "User inserted"});

});


module.exports = router;
