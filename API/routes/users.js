var express = require('express');
var router = express.Router();

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

var users = [];
for (let i = 0; i < 3; i++) {
  const user = new User(i + 1, "testname" + String(i+1), "123123");
  users.push(user);
}



router.get('/', function(req, res, next) {
  var db = req.app.locals.db;
  var cursor = db.collection("users").find();
  cursor.toArray().then(c => res.json(c));
});


router.get('/:id', function(req, res, next) {
    var db = req.app.locals.db;
    var id = req.params.id;
    console.log(id);
    const query = {'id': id};
    db.collection("users")
      .findOne(query)
      .then(result => {
        console.log(`Got user ${result}`);
        res.json(result);
      })
      .catch(err=>{
        console.log(`Error: ${err}`);
      });
    
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
