'use strict'

const express = require('express');
const app = express();
const mustache = require('mustache-express');
app.engine('mustache', mustache());
app.set('views', './public');
app.set('view engine', 'mustache');

app.get('/public/', function(req, res) {
  // return full homepage

})

app.get('/public/:username', function(req, res) {
  // return user profile

})

app.listen(3000, function() {
  console.log("Express server started");
})
