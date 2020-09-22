const db = require("../models");

module.exports = function(app) {
  //get all games
  app.get("/api/games", (req, res) => {
    var query = {};
    if (req.query.user) {
      query.UserID = req.query.user_id;
    }
    db.Game.findAll({
      where: query,
      include: [db.User, db.Genre, db.System],
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });
  //POST route for adding a new game
  app.post("/api/games", async function(req, res) {
    const dbGame = await db.Game.create({
      title: req.body.title,
      publisher: req.body.publisher,
      rating: req.body.rating,
      wishlist: req.body.wishlist,
      playing: req.body.playing,
      beaten: req.body.beaten,
      UserId: req.user.id,
    });
    const dbSystem = await db.System.findOne({
      where: {
        name: req.body.system,
      },
    });
    const dbGenre = await db.Genre.findOne({
      where: {
        name: req.body.genre,
      },
    });
    await dbGame.addSystem(dbSystem);
    await dbGame.addGenre(dbGenre);
    res.json(dbGame);
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
