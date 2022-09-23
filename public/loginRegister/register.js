// var express = require('express');
// var router = express.Router();

// var Register = require('../models/register');

// const redirectTodashboard = (req, res, next) => {
//     if(!req.session.passport) {
//         next();
//     } else {
//         res.redirect('../loginRegister/login');
//     }
//   }
  
// router.get('/', redirectTodashboard, function (req, res, next) {
//     res.render('register', {});
// });

// router.post('/', (req, res, next) => {

//     // console.log("submited");
//     // return;
   
//      var fname = req.body.fname;
//     var lname = req.body.lname;
//     var email = req.body.email;
//     var password = req.body.password;
//     var cpassword = req.body.cpassword;
//     errors = req.validationErrors();
//     if (errors) {
//         res.render('register', {
//             errors: errors
//         });
//     } else {
//         var userData = new Register({
//             email: email,
//             fname: fname,
//             lname: lname,
//             password: password
//         });
//         Register.createUser(userData, function (err, register) {
//             console.log(err, register);
//         });
//         // console.log(userData);
//         req.flash('success', 'User Added');
//         res.redirect('/');
//     }


// });

// module.exports = router;