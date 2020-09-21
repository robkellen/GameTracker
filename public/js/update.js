function getGames() {
  $.get("/api/games", (response) => {
    console.log(response);
    // window.location.replace("/members");
    $.redirect("/members", response);
  });
}

$(document).ready(() => {
  getGames();
});
