const db = require("../models");

module.exports = function(app) {
  //get all games
  app.get("/api/games", async function(req, res) {
    const games = await db.Games.findAll({
      where: { id: req.user.id },
    });
    res.render("membersIndex", {
      games: games.map((game) => game.toJSON()),
    });
  });

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
