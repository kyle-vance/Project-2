// 
const axios = require("axios");
module.exports={
    workoutMuscle(muscle){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {muscle: muscle
        },
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    },
    workoutName(name){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {
          name: name
        },
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    },
    workoutType(type){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {
          type: type
        },
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    },
    workoutDifficulty(difficulty){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {
          difficulty: difficulty
        },
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    },
    workoutInstructions(instructions){
      return axios.get('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises', {
        params: {instructions: instructions
        },
        headers: {
          'X-RapidAPI-Key': '7f9675d051msh33d133dcf3f8fa1p1d63bejsn093e8ff0a810',
          'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
      }})
    },
};



