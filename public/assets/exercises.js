const api = require('../utils/api.js');
const router = require('express').Router();

const displayWorkout = [];

router.use('/exercises', api);

api.workoutMuscle(req.body.traps)



