function getGames() {
  // $.get("/api/games", response => {
  //   console.log(response);
  // });
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://rawg-video-games-database.p.rapidapi.com/games",
    method: "GET",
    headers: {
      "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
      "x-rapidapi-key": "5470b880aamsh37bac69440bf26dp130d2djsn9d4d83f96816",
    },
  };

  $.ajax(settings).done(function(response) {
    console.log(response);
  });
}

$(document).ready(() => {
  getGames();
});
