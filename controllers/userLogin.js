const { auth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: '1234qwer',
  baseURL: 'http://localhost:3001',
  clientID: 'wDlydGWyiqBLPGZMNN2rwBbS1mpdZ3ee',
  issuerBaseURL: 'https://dev-l5zcmpg0.us.auth0.com'
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});












// in MVC (14)  Lesson 24 this is in the homeRoutes page.  
// Unsure if it has to be

// const router = require('express').Router();
// const { User } = require('../models');
// const withAuth = require('../utils/auth');

// // Prevent non logged in users from viewing the homepage
// router.get('/', withAuth, async (req, res) => {
//   try {
//     const userData = await User.findAll({
//       attributes: { exclude: ['password'] },
//       order: [['name', 'ASC']],
//     });

//     const users = userData.map((project) => project.get({ plain: true }));

//     res.render('homepage', {
//       users,
//       // Pass the logged in flag to the template
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If a session exists, redirect the request to the homepage
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

// module.exports = router;
