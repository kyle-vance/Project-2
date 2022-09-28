const router = require('express').Router();
const api = require('../utils/api')
const homeRoutes = require('./homeRoutes');
const apiRoutes = require('./api');

router.use('/', homeRoutes,);
router.use('/api', apiRoutes);

module.exports = router;


// const { requiresAuth } = require('express-openid-connect');


//OAuth integration
// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'Auth0 Webapp sample Nodejs',
//     isAuthenticated: req.oidc.isAuthenticated()
//   });
// });

// router.get('/profile', requiresAuth(), function (req, res, next) {
//   res.render('profile', {
//     userProfile: JSON.stringify(req.oidc.user, null, 2),
//     title: 'Profile page'
//   });
// });




// router.get('/:search', (req, res) => {
//     api.workoutMuscle(req.params.search)
//         .then(data=>{
//             res.render("workoutDetail", {workouts:data.data});
            
//         }).catch(error=>{
//             console.log(error)
//             res.status(500).json(error.message)
//         })
// }
// )
// router.get('/name', (req, res) => {
//     api.workoutName(req.body.name)
//         .then(data=>{
//             res.json(data.data);
            
//         }).catch(error=>{
//             console.log(error)
//             res.status(500).json(error.message)
//         })
// }
// )
// router.get('/type', (req, res) => {
//     api.workoutType(req.body.type)
//         .then(data=>{
//             res.json(data.data);
            
//         }).catch(error=>{
//             console.log(error)
//             res.status(500).json(error.message)
//         })
// }
// )
// router.get('/difficulty', (req, res) => {
//     api.workoutDifficulty(req.body.difficulty)
//         .then(data=>{
//             res.json(data.data);
            
//         }).catch(error=>{
//             console.log(error)
//             res.status(500).json(error.message)
//         })
// }
// )
// router.get('/instructions', (req, res) => {
//     api.workoutInstructions(req.body.instructions)
//         .then(data=>{
//             res.json(data.data);
            
//         }).catch(error=>{
//             console.log(error)
//             res.status(500).json(error.message)
//         })
// }
// )