/**
 * transactionRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');
const store = new SimpleJsonStore('./data.json', { users: []});

router.get('/', function getIndexPage(req, res)  {
  let viewModel = req.viewModel;
  viewModel.users = store.get('users');
  res.render('transaction.pug', viewModel);

});


module.exports = router;
