const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const session = require('express-session');
const helpers = require('./utils/helpers.js');
const sequelize = require('./config/connection');
const api = require('./utils/api.js');
const path = require('path');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
//oauth
// const { auth } = require('express-openid-connect');


const app = express();
const PORT = process.env.PORT || 3001;
const trackerAPI = require("./controllers/api/trackerAPIRoutes.js");
// // Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });
// // Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);


app.set('view engine', 'handlebars', 'ejs');

//ejs oauth add
// app.set('view engine', 'handlebars', 'ejs');

//oauth
// app.set('views', path.join(__dirname, 'views'));

// oauth?
// app.use(logger('dev'));




// Configure and link a session object with the sequelize store
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// Add express-session and store as Express.js middleware
app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
app.use("/tracker", trackerAPI);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
