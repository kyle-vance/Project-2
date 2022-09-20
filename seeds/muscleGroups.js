const { MuscleGroups } = require('../models');

const muscleGroupsData =
  [
    {
      name: 'abdominals',
    },
    {
      name: 'abductors',
    },
    {
      name: 'adductors',
    },
    {
      name: 'biceps',
    },
    {
      name: 'calves',
    },
    {
      name: 'chest',
    },
    {
      name: 'forearms',
    },
    {
      name: 'glutes',
    },
    {
      name: 'hamstrings',
    },
    {
      name: 'lats',
    },
    {
      name: 'neck',
    },
    {
      name: 'quadriceps',
    },
    {
      name: 'traps',
    },
    {
      name: 'triceps',
    },
  ];

const seedMuscleGroups = () => MuscleGroups.bulkCreate(muscleGroupsData);

module.exports = seedMuscleGroups;
