//create an app server
var express = require("express");
var app = express();
console.log ("servidor encendido");
//set path to the views (template) directory
app.set('views', __dirname + '/views');
//set path to static files
app.use(express.static(__dirname + '/../public'));
//handle GET requests on /
app.get('/', function(req, res){res.render('index.jade', {title: 'Smartphone'});});
//listen on localhost:3000
app.listen(3000);