var express = require('express');
var path = require('path');
var app = express();

// set view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

//about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

//pricing page
app.get('/pricing', function(req, res) {
    res.render('pages/pricing');
});

//contact page
app.get('/contact', function(req, res) {
    res.render('pages/contact');
});

app.listen(8080);
console.log('Server is currently listening on port 8080');