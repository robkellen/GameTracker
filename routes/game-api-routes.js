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
    }).then(function(dbGame){
      res.json(dbGame);
    })
  });
  //POST (send to server) route for adding a new game
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
