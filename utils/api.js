const axios = require("axios");
module.exports={
    workout(muscleGroup){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {muscle: muscleGroup},
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    }
};
