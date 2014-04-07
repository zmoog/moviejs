
/**
 * Module dependencies.
 */

var express = require('express')
  , handlebars = require('express3-handlebars')
  , routes = require('./routes')
  , user = require('./routes/user')
  , movie = require('./routes/movie')
  , http = require('http')
  , path = require('path')
  , helpers = require('./libs/helpers');

var app = express();

app.configure(function(){

  app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    helpers: helpers
  }));

  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'handlebars');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/movies', movie.list);
app.get('/movies/:id', movie.detail);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
