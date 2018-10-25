/**
 * withdrawRouter
 */
const express = require('express');
const router = express.Router(); //eslint-disable-line
const SimpleJsonStore = require('simple-json-store');
const store = new SimpleJsonStore('./data.json', { users: [] });

router.get('/', function getIndexPage(req, res)  {
 let viewModel = req.viewModel;
  res.render('login.pug', viewModel);
});


router.post('/home', function toHome(req, res) {
    let user = {};
    const users = store.get('users');
    user = users.find(users => (users.acct_no === req.params.acct && users.PIN === req.params.pin));
  
    if(count(user) > 0){
        users.log = 1; 
         res.redirect('/home');
    }
    else{
        alert('Incorrect account number or PIN!');
    }


});

module.exports = router;