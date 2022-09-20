const User = require('./User');
const MuscleGroups = require('./MuscleGroups');
// const Exercises = require('./Exercises');

// MuscleGroups.hasMany(Exercises, {
//     foreignKey: 'muscleGroups_id',
// });

// Exercises.belongsTo(MuscleGroups, {
//     foreignKey: 'muscleGroups_id',
// });

module.exports = { User, MuscleGroups };
