/**
 * @description
 * Entry file for The Province Man's Web App
 */
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const fundsRouter = require('./server/routers/fundsRouter');
const balanceRouter = require('./server/routers/balanceRouter');
const depositRouter = require('./server/routers/depositRouter');
const withdrawRouter = require('./server/routers/withdrawRouter');
const transactionRouter = require('./server/routers/transactionRouter');
const indexRouter = require('./server/routers/indexRouter');
const billsRouter = require('./server/routers/billsRouter');
const usersRouter = require('./server/routers/usersRouter');
const loginRouter = require('./server/routers/loginRouter');


const port = 3300;

//- Middleware: Logs the request to the server
//- the 'dev' is formatted as ":http_verb :url :status_code :response_time ms - :res[content-length]"
//- e.g. GET / 304 602.566 ms - -
//- READ More: https://www.npmjs.com/package/morgan
app.use(morgan('dev'));

// Middleware: Parses the value on the request body and then interprets its value
//             so you can use it as req.body
// e.g. req.body.title
//      req.body.content
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Middleware: To serve static files such as images, CSS files, and JavaScript files
//             found in the public folder
// e.g. public/cardo.jpg is accessed as http://localhost:3300/cardo.jpg
//      public/images/cardo.jpg is accessed as http://localhost:3300/images/cardo.jpg
//
// READ More: http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// Custom Middleware: Sets the req.viewModel as an object
//                    so that we can use it on all our routers.
// Purpose: So we do not have to redeclare the title on all our pages.
app.use((req, res, next) => {
  req.viewModel = {
    title: 'TeamWallet'
  };
  next();
});

// Sets our templating engine for views is Pug and its target directory
// NOTE: The __dirname is a global Node.js variable important for setting up the directory of the views
app.set('views', path.join(__dirname, 'server/views'));
app.set('view engine', 'pug');

// Note: The order must be maintained here
app.use('/',loginRouter);
app.use('/home', indexRouter);
app.use('/balance', balanceRouter);
app.use('/bills', billsRouter);
app.use('/deposit', depositRouter);
app.use('/funds', fundsRouter);
app.use('/transaction', transactionRouter);
app.use('/api/users', usersRouter);
app.use('/withdraw', withdrawRouter);


app.listen(port, (err) => {
  if(err) { return console.error(err); }
  console.log(`Listening to ${port}...`);
});
