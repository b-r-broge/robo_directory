'use strict'

const express = require('express');
const app = express();
const mustache = require('mustache-express');
const robots = require('./data.js');
app.engine('mustache', mustache());
app.set('views', './public');
app.set('view engine', 'mustache');
app.use(express.static(__dirname));

app.get('/public/', function(req, res) {
  // return full homepage
  console.log('access homepage');
  res.render('index.mustache', robots);

});

app.get('/public/:username', function(req, res) {
  // return user profile
  console.log('access username:', req.params.username);
  res.render('user.mustache', robots.users.find(function(x) {
    return x.username === 'req.params.username'
  }));

});

app.listen(3000, function() {
  console.log("Express server started");
});
