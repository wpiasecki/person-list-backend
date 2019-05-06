const express = require('express');
const app = express();
const port = 3000;

const person = require('./person.js');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/person/list', (req, res) => {
  return res.send(person.list());
});


app.listen(port);

