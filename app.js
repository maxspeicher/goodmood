#!/bin/env node

/**
 * Module dependencies.
 */
var express = require('express')
  , routes = require('./routes')
  , path = require('path');

var app = express.createServer();

app.configure(function(){
  app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
  app.set('ipaddress', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('asdf1234'));
  app.use(express.session());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/goodmood', routes.goodmood);
app.get('/goodmood/allgifs', routes.goodmood_allgifs);

app.listen(app.get('port'), app.get('ipaddress'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
