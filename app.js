// modules =================================================
var express        = require('express');
var mongoose       = require('mongoose');
var app            = express();
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================
var db = require('./server/config/db');

// set our port
var port = process.env.PORT || 8080;
var connectionString = process.env.OPENSHIFT_MONGODB_DB_URL || "mongodb://localhost/notinphilly"

mongoose.connection.on('error', console.log);
mongoose.connect(connectionString);

//seed the database
//uncomment to seed
//var dbseeder = require('./server/config/dbseeder');

var server = require('http').createServer(app);
require('./server/config/express')(app);

// routes ==================================================
require('./server/routes')(app);

// start app ===============================================
// startup our app at http://localhost:8080
app.listen(port);

// shoutout to the user
console.log('Magic happens on port ' + port);

// expose app
exports = module.exports = app;
