/**
 * withdrawRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');
const store = new SimpleJsonStore('./data.json', { users: [] });

router.get('/', function getIndexPage(req, res)  {
  let viewModel =req.viewModel;
  viewModel.users = store.get('users');
  res.render('withdraw.pug', viewModel);

});

router.post('/', function withdraw(req, res){

  const id = req.params.id;
  const users = store.users('users');


});


module.exports = router;
