const sequelize = require('../config/connection');
const seedMuscleGroups = require('./muscleGroups');
const seedExercises = require('./exercises');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMuscleGroups();

  await seedExercises();
  process.exit(0);
};

seedAll();
