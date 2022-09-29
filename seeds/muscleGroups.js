const { MuscleGroups } = require('../models');

const muscleGroupsData =
  [
    {
      name: 'Abdominals',
      picture: 'abdomen.jpg',
      description: 'Abdominal (Abs) are large group of muscles at the front of your trunk (lower torso) that make up some of the core.'
    },
    {
      name: 'Abductors',
      picture: 'abductors.jpg',
      description: "The hip abductor muscle group is located on the lateral side of the thigh and moves the thigh away from the body's midline. "
    },
    {
      name: 'Adductors',
      picture: 'adductor.jpg',
      description: "The leg adductor makes up the inside of the thigh. It contracts and pulls the hip towards the body's midline."
    },
    {
      name: 'Biceps',
      picture: 'biceps.jpg',
      description: 'The bicep is situated at the front end of your upper arm between the elbow and the shoulder and is the antagonist of the tricep.'
    },
    {
      name: 'Calves',
      picture: 'calves.jpg',
      description: "The calf muscle is made up of two muscles and is the back proportion of the lower leg. It is linked from the knee joint down to the ankle."
    },
    {
      name: 'Chest',
      picture: 'chest.jpg',
      description: "The chest is also referred to as pectorals (pecs). The pectorial muscles make up a majority of the chest and are split into two parts."
    },
    {
      name: 'Forearms',
      picture: 'forearm.jpg',
      description: "The forearm is comprised of multiple muscles, each of which contract differently when the hand is rotated at different angles."
    },
    {
      name: 'Glutes',
      picture: 'glutes.jpg',
      description: "The main muscle in the buttocks is know as the gluteus maximus (glutes)."
    },
    {
      name: 'Hamstrings',
      picture: 'hamstrings.jpg',
      description: "Hamstrings are the three muscles behind the thigh. They cross both the hip and the knee joint and are therefor involved in flexing the knee and help assist in extending the hip."
    },
    {
      name: 'Lats',
      picture: 'lats.jpg',
      description: "Your main muscle in the back is called your latissimi dorsi (lats). This is a vast triangular muscle positioned in the mid-section of your back."
    },
    {
      name: 'Neck',
      picture: 'neck.jpg',
      description: "The neck is a much under-emphasized body part. Many do not specifically train the neck muscles at all and others tend to train neck at the end of a session."
    },
    {
      name: 'Quadriceps',
      picture: 'quads.jpg',
      description: "Quadriceps (Quads) are group of muscles at the front of the thigh and make up a majority of the leg. There are precisely four muscles that make up the quads."
    },
    {
      name: 'Traps',
      picture: 'traps.jpg',
      description: "Your trapezius muscle, or traps, is a large muscle covering your upper back."
    },
    {
      name: 'Triceps',
      picture: 'triceps.jpg',
      description: "The tricep is situated at the posterior end of your upper arm and is the antagonist of the bicep."
    },
  ];

const seedMuscleGroups = () => MuscleGroups.bulkCreate(muscleGroupsData);

module.exports = seedMuscleGroups;
