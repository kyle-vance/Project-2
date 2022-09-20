const router = require('express').Router();
const api = require('../utils/api')
router.get('/', (req, res) => {
    api.workout(req.body.muscleGroup)
        .then(data=>{
            res.json(data.data);
            
        }).catch(error=>{
            console.log(error)
            res.status(500).json(error.message)
        })
}
)
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);

module.exports = router;
