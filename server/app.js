const express = require('express');
const passport = require('passport');
const routes = require('./routes');
const sessions = require('./sessions');
const cors = require('cors');
const User = require('./models/UserModel');
const passportLocalStrategy = require('./config/passport-local');
const passportGoogleOath = require('./config/passport-google-oath');
const passportFacebookOauth = require('./config/passport-facebook-oauth');
const mongooseConnection = require('./config/database');

require('dotenv').config();

const PORT = process.env.PORT || 3001;
//  -------------- GENERAL SETUP ----------------
// Create the Express application
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setting CORS so that any website can Access our API
app.use(
	cors({
		origin: 'http://localhost:3000',
		methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
		credentials: true
	})
);
// -------------- SESSION SETUP ----------------
app.use(sessions);

//  -------------- PASSPORT AUTHENTICATION ----------------
// Need to require the entire Passport config module so app.js knows about it
passport.use(passportLocalStrategy);
passport.use(passportGoogleOath);
passport.use(passportFacebookOauth);

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	User.findById(id).then((user) => {
		done(null, user);
	});
});

//  -------------- ROUTES ----------------
// Imports all of the routes from ./routes/index.js
app.use(routes);

//-------------- SERVER ----------------+
mongooseConnection.once('open', function () {
	// we're connected!
	app.listen(PORT, () => {
		console.log(`Server listens on http://localhost:${PORT}`);
	});
});

app.use(function (err, req, res, next) {
	if (err.name === 'UnauthorizedError')
		res.status(401).send({ message: `${err.name}: ${err.message}` });
	else next(err);
});
