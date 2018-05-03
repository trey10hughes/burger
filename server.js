var express = require('express');
var methodoverride = require('method-override');
var bodyparser = require('body-parser');

var app = express();
//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static('public'));
// app.use(express.static('public'));

// Parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }));

// Handlebars
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


var router = require('./controllers/burgers_controller.js');
app.use('/', router);

// Open Server
app.listen(process.env.PORT || 3000, function () {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});