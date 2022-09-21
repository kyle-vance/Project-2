const sequelize = require('../config/connection');
const seedMuscleGroups = require('./muscleGroups');
const { User } = require('../models');

const userData = require('./userData.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedMuscleGroups();
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedAll();