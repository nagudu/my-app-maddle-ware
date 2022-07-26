import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
import models from './models';
const path = require("path");

const app = express();

app.use(bodyParser.json());

let port = process.env.PORT || 34567;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(cors());

// force: true will drop the table if it already exits
// models.sequelize.sync({ force: true }).then(() => {
models.sequelize.sync().then(() => {
  console.log('Drop and Resync with {force: true}');
});

// passport middleware
app.use(passport.initialize());

// passport config
require('./config/passport')(passport);

//default route
app.get('/', (req, res) => res.send('Hello my World'));

require('./routes/user.js')(app);
require('./routes/policyClass.js')(app);
<<<<<<< HEAD
require("./routes/contact")(app);
require("./routes/feedback")(app);
require("./routes/appointment_details")(app);
require("./routes/messge_send")(app);

=======
require('./routes/feedback')(app);
require('./routes/new_inmate_reg')(app);
>>>>>>> 9b227ee11f22d0e34a848503e2cea06b455cbe6f

//create a server
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});
