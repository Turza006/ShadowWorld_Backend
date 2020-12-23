let express = require('express');
let path = require('path');
const busboy = require('connect-busboy');
const busboyBodyParser = require('busboy-body-parser');
let logger = require('morgan');
const helmet = require('helmet')
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');

module.exports = app => {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(busboy());
    app.use(helmet())
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(busboyBodyParser());
}