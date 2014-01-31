/**
 * Module dependencies.
 */

var express = require('express'),
  routes = require('./routes'),
  user = require('./routes/user'),
  http = require('http'),
  path = require('path'),
  mongoose = require('mongoose');

var app = express();

app.configure(function () {
  app.set('port', process.env.PORT || 3000);

  app.engine('html', require('ejs').__express);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'html');

  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function () {
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);


// Connect to mongo and then start server
function connectToMongo(callback) {

  mongoose.connect('mongodb://localhost/analytics');
  mongoose.connection.on('open', function(){

    console.log('Connected to mongodb://localhost/analytics');
    callback();
  });
}


connectToMongo(function(){

  app.listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));
  });

});
