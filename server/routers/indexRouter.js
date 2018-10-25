/**
 * indexRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');

// Initializes the data-2.json file with notes as its initial value if empty
// const store = new SimpleJsonStore('./data-2.json', { notes: [] });

router.get('/', function getIndexPage(req, res) {
  let viewModel = req.viewModel;
  res.render('index.pug', viewModel);
});

router.get('/balance', function getBalancePage(req, res) {
  let viewModel = req.viewModel;
  res.render('balance.pug', viewModel);
});

module.exports = router;
