const axios = require('axios').default;

function getallgames (){

  axios({
      "method":"GET",
      "url":"https://rawg-video-games-database.p.rapidapi.com/games",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key":"5470b880aamsh37bac69440bf26dp130d2djsn9d4d83f96816",
      "useQueryString":true
      }
      })
      .then((response)=>{
        console.log(response)
      })
      .catch((error)=>{
        console.log(error)
      })
}
getallgames();