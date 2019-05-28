const express = require('express'),
  app = express(),
  _ = require('lodash'),
  bodyParser = require('body-parser');

app.use(bodyParser.json());

let emp = [];

app.get('/emp', (req, res) => {
  let resObj = _.filter(emp, { id: req.query.id });

  if (resObj) {
    res.json({
      status: 'success',
      data: resObj
    });
  }
  else {
    res.json({
      status: 'fail',
      msg: 'emp not found'
    });
  }
});

app.post('/emp', (req, res) => {
  emp.push(req.body);
  res.json({
    status: 'success'
  });
});

app.delete('/emp', (req, res) => {
  emp = emp.filter(function (obj, index, arr) {
    return obj.id !== req.query.id;
  });

  res.json({
    status: 'success'
  });
});

app.listen(3000, () => { console.log('Server up at port 3000') });