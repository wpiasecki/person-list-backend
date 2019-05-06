const express = require('express');
const app = express();
const port = 3000;

const person = require('./person.js');


app.get('/person/list', (req, res) => {
  return res.send(person.list());
});


app.listen(port);

