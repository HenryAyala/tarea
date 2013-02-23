
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
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

app.get("/", function(reg, res){
	res.render("index", {
		title : "bienvenidos"
	});
});

app.get("/compras", function(reg, res){
	res.render("compras", {
		title : "compras"
	});
});

app.get("/ventas", function(reg, res){
	res.render("ventas", {
		title : "ventas"
	});
});

app.get("/subir", function(reg, res){
	res.render("subir", {
		title : "subir"
	});
});

app.get("/registro", function(reg, res){
	res.render("registro", {
		title : "registro"
	});
});

app.get("/login", function(reg, res){
	res.render("login", {
		title : "login"
	});
});

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
