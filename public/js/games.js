function getGames() {
  $.get("/api/games", response => {
    console.log(response);
  });
}

$(document).ready(() => {
  getGames();
});
