const router = require('express').Router();

const { MuscleGroups, Exercises, User } = require('../models');

// GET all muscleData for homepage
router.get('/', async (req, res) => {
  try {
      res.render('homepage', {
        loggedIn: req.session.loggedIn
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/musclegroups', async (req, res) => {
  try {
    const muscleGroupsData = await MuscleGroups.findAll({
      include: [
        {
          model: Exercises,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const muscleData = muscleGroupsData.map((muscleGroups) =>
      muscleGroups.get({ plain: true })
    );

    res.render('muscleGroups', {
      loggedIn: req.session.loggedIn,
      muscleData,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one muscle
router.get('/muscleGroups/:id', async (req, res) => {
  try {
    const muscleGroupsData = await MuscleGroups.findByPk(req.params.id, {
      include: [
        {
          model: Exercises,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const muscleGroups = muscleGroupsData.get({ plain: true });
    res.render('exercise', { muscleGroups,  loggedIn: req.session.loggedIn});
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one exercise
router.get('/exercises/:id', async (req, res) => {
  try {
    const dbExerciseData = await Exercises.findByPk(req.params.id);

    const exercise = dbExerciseData.get({ plain: true });

    res.render('exercise', { exercise, loggedIn: req.session.loggedIn });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});
// app.use("/assets", express.static('./assets/'));

router.get('/logout', (req, res) => {
  if (req.session.loggedIn) {
    // Remove the session variables
    req.session.destroy(() => {
      res.render('homepage');
    });
  } else {
    res.render('homepage');
  }
});




module.exports = router;




