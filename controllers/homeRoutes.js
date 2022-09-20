const router = require('express').Router();
const {Name} = require('../models');

router.get('./public/musclegroups', async (req, res) =>  
{ try {
  const dbWorkoutData = await Name.findAll({
    include: [
      {
        model: Exercises,
        attributes: ['excercise', 'description'],
      },
    ],
  });
  const excercises = dbWorkoutData.map((Excersises) =>
  Excersises.get({ plain: true })
);

res.render('Exercise', {
  Excercises,
});
}  catch (err) {
console.log(err);
res.status(500).json(err);
}
});
  


  // Send the rendered Handlebars.js template back as the response
  res.render('homepage');
;

module.exports = router;
