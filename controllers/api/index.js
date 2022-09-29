const router = require('express').Router();
const userRoutes = require('./userRoutes');
const trackerRoutes = require('./trackerAPIRoutes')
const muscleRoutes = require ("./muscleExcercise")

router.use('/users', userRoutes);
router.use('/tracker', trackerRoutes);
router.use("/muscle" , muscleRoutes) 

module.exports = router;
