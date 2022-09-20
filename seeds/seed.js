const sequelize = require('../config/connection');
const seedMuscleGroups = require('./muscleGroups');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedMuscleGroups();
  process.exit(0);
};

seedAll();
