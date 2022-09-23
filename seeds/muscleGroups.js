const { MuscleGroups } = require('../models');

const muscleGroupsData =
  [
    {
      name: 'Abdominals',
    },
    {
      name: 'Abductors',
    },
    {
      name: 'Adductors',
    },
    {
      name: 'Biceps',
    },
    {
      name: 'Calves',
    },
    {
      name: 'Chest',
    },
    {
      name: 'Forearms',
    },
    {
      name: 'Glutes',
    },
    {
      name: 'Hamstrings',
    },
    {
      name: 'Lats',
    },
    {
      name: 'Neck',
    },
    {
      name: 'Quadriceps',
    },
    {
      name: 'Traps',
    },
    {
      name: 'Triceps',
    },
  ];

const seedMuscleGroups = () => MuscleGroups.bulkCreate(muscleGroupsData);

module.exports = seedMuscleGroups;
