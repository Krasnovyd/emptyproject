var express = require("express");
var bodyParser = require('body-parser');
var mailer = require('./mailer');

var app = express();
var port = process.env.PORT || 3000;

app.listen(port, function() {
	console.log("Listening on " + port);
});

/* serves main page */
app.get("/", function(req, res) {
	res.sendfile('src/index.html')
});

app.use(bodyParser.json());

 /* sending emails */
app.post("/hello", mailer);

/* serves all the static files */
app.get(/^(.+)$/, function(req, res){ 
	console.log('static file request : ' + req.params);
	res.sendfile( __dirname + req.params[0]); 
});

app.use(function(req, res) {
	res.send(404, 'Page not found')
});