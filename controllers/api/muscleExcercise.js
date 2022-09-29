const { workoutName, workoutMuscle } = require('../../utils/api');

const router = require('express').Router();


router.get("/:name" , async (req , res) => {
    try{
const {data} = await workoutMuscle (req.params.name)
console.log(data)
res.render("exerciseDetails" , {
    data,
}) 
    }
    catch(err){
        console.log(err)
        res.json(err.message)
    }
});




module.exports = router