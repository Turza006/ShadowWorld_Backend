var createError = require('http-errors');
var express = require('express');
var middleware = require('./config/Middleware');
var apiroute = require('./config/ApiRouter');
require('./config/db');
var cors = require('cors');



var path = require('path');
var app = express();
app.use(cors());



middleware(app)
apiroute(app)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {

  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
