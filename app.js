var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Configuración Sequelize
var db = require('./database/models');

// Configuracion MYSQL
var mysql = require('mysql');

var app = express();

// Resto de la configuracion

db.sequelize.sync();
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

//'use strict';
connection.query(
  'SELECT "foo" AS first_field, "bar" AS second_field',
  function(err, results, fields) {
      console.log(err);
      console.log(results);
      connection.end();
  }
);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
