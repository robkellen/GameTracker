const db = require("../models");

// const axios = require('axios').default;

// function getallgames()
// axios({
//     "method":"GET",
//     "url":"https://rawg-video-games-database.p.rapidapi.com/games",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"rawg-video-games-database.p.rapidapi.com",
//     "x-rapidapi-key":"5470b880aamsh37bac69440bf26dp130d2djsn9d4d83f96816",
//     "useQueryString":true
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

module.exports = function(app) {
  //get all games
  app.get("/api/games", async function(req, res) {
    const games = await db.Games.findAll({
      where: { id: req.user.id },
    });
    res.render("index", {
      games: games.map((game) => game.toJSON()),
    });
  });
  // $.ajax({
  //   url: "https://api.rawg.io/api/games",
  //   method: "GET",
  // }).then(function (response) {
  //   console.table(response);
  // });
  // res.json(response)

  //POST route for adding a new game
  app.post("/api/games", function(req, res) {
    db.Game.create(req.body).then(function(dbGame) {
      res.json(dbGame);
    });
    db.Game.findAll();
  });
  //PUT route for updating a game
  app.put("/api/games", function(req, res) {
    db.Game.update(req.body, {
      where: {
        id: req.body.id,
      },
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });
};
