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
      include: [db.User],
    }).then(function(dbGame) {
      res.json(dbGame);
    });
  });
  //POST route for adding a new game
  app.post("/api/games", function(req, res) {
    db.Game.create({
      title: req.body.title,
      publisher: req.body.publisher,
      rating: req.body.rating,
      wishlist: req.body.wishlist,
      playing: req.body.playing,
      beaten: req.body.beaten,
      
    }).then(function(dbGame) {
      db.System.findOne({
        where: {
          name: req.body.system,
        },
      }).then(function(dbSystem) {
        dbGame.addSystem(dbSystem).then(function() {
          res.json(dbGame);
        });
      });
    });
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
