var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.set('port', process.env.PORT || 4000);
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../client')));

app.get('/getAllBirthdays', function (req, res) {
  res.json([{
    "name" : "Swati",
    "dob"  : "11-10-1992"
  },{
    "name" : "Thiru",
    "dob"  : "11-06-1990"
  },{
    "name" : "Bargavi",
    "dob"  : "28-08-1993"
  },{
    "name" : "Thowfiq",
    "dob"  : "11-13-1995"
  }]);
});

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});
