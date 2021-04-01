const router = require('express').Router();
const passport = require('passport');
const { isAuth, sendUser, createUser } = require('../config/authMiddleware');

require('dotenv').config();

// facebook OAUTHROUTES
router.get('/auth/facebook', passport.authenticate('facebook'));
router.get(
	'/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect: process.env.CLIENT_BASE_URL,
		failureRedirect: `${process.env.CLIENT_BASE_URL}/login`
	})
);
// ------GOOGLE OAUTH ROUTES
router.get(
	'/auth/google',
	passport.authenticate('google', { scope: ['email', 'profile'] })
);
router.get(
	'/auth/google/callback',
	passport.authenticate('google', {
		successRedirect: process.env.CLIENT_BASE_URL,
		failureRedirect: `${process.env.CLIENT_BASE_URL}/login`
	})
);

// SIGN UP ROUTE WITH AUTHOMATIC LOG IN VIA PASSPORT LOCAL STRATEGY
router.post('/signup', createUser, passport.authenticate('local'), sendUser);

// LOG IN ROUTE WITH PASSPORT LOCAL STRATEGY
router.post('/login', passport.authenticate('local'), sendUser);

// ROUTE ROUTE, checking cookies, if req.user populated via passport.desirializer then send user
router.get('/', sendUser);

// LOG OUT USER, DELETES SESSION AND COOKIES
router.get('/logout', isAuth, (req, res) => {
	req.logout();
	res.end();
});

module.exports = router;
