const express = require("express");
const path = require("path");
const app = express();
const logger = require("morgan");
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(logger("dev"));

require('./config/sessions.js')(app);

app.set('view engine', 'ejs');


var routes_setter = require('./config/routes.js');
routes_setter(app);

app.listen(port, function() {
  console.log('Listening on', port);
});
