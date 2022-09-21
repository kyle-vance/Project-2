const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers.js');
const sequelize = require('./config/connection');
const api = require('./utils/api.js');


//oauth
const { auth } = require('express-openid-connect');


const app = express();
const PORT = process.env.PORT || 3001;

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});



// const axios = require("axios");

// const options = {
//   method: 'GET',
//   url: 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises',
//   params: {muscle: 'biceps'},
//   headers: {
//     'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
//     'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
//   }
// };

// function getAPI() { axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });
// }
// getAPI();