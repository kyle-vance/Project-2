const { MuscleGroups } = require('../models');

const muscleGroupsData =
  [
    {
      name: 'Abdominals',
      picture: 'abdomen.jpg',
    },
    {
      name: 'Abductors',
      picture: 'abductors.jpg',
    },
    {
      name: 'Adductors',
      picture: 'adductor.jpg',
    },
    {
      name: 'Biceps',
      picture: 'biceps.jpg',
    },
    {
      name: 'Calves',
      picture: 'calves.jpg',
    },
    {
      name: 'Chest',
      picture: 'chest.jpg',
    },
    {
      name: 'Forearms',
      picture: 'forearm.jpg',
    },
    {
      name: 'Glutes',
      picture: 'glutes.jpg',
    },
    {
      name: 'Hamstrings',
      picture: 'hamstrings.jpg',
    },
    {
      name: 'Lats',
      picture: 'lats.jpg',
    },
    {
      name: 'Neck',
      picture: 'neck.jpg',
    },
    {
      name: 'Quadriceps',
      picture: 'quads.jpg',
    },
    {
      name: 'Traps',
      picture: 'traps.jpg',
    },
    {
      name: 'Triceps',
      picture: 'triceps.jpg'
    },
  ];

const seedMuscleGroups = () => MuscleGroups.bulkCreate(muscleGroupsData);

module.exports = seedMuscleGroups;
