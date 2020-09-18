function getGames() {
  $.get("/api/games", function(response) {
    console.log(response);
  });
}

$(document).ready(() => {
    getGames();
});