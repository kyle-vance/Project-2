const router = require('express').Router();
const { MuscleGroups, Exercises } = require('../models');

// GET all muscleData for homepage
router.get('/', async (req, res) => {
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

    res.render('homepage', {
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
    res.render('muscleGroups', { muscleGroups });
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

    res.render('exercise', { exercise });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
