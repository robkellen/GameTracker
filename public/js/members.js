$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
});
$(document).ready(() => {
  $.get("/api/games",(req, res) => {
    // const games = await db.Game.findAll({
    //   where: { id: req.user.id },
    // });

    // res.render("membersIndex", {
    //   games: games.map((game) => game.toJSON()),
    // });
    $("#table_id")
      .DataTable()
      ;
  });
});
