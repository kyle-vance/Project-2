// 
const axios = require("axios");
module.exports={
    workout(muscleGroup, name){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {
        muscle: muscleGroup,
        name:name},
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    }
};
