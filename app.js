var express = require('express')
, fs = require('fs')
, path = require('path')
, index = require('./routes/index.js')

var app = express();

app.configure(function(){
	app.set('views', __dirname+'/views');
	app.set('view engine', 'jade');
	app.use(express.json());
	app.use(express.urlencoded());
	app.use(express.static('public'));
});

app.get('/', index.index);

app.get('/public/*', function(req, res){
	res.sendfile(__dirname + req.url);
});

app.get("*", function(req, res){
	res.send("Page not found.", 404);
});

var port = Number(process.env.PORT || 5050);
app.listen(port, function(){
	console.log("App has started on port: "+ port);
});
