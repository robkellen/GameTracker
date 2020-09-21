$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
});
$(document).ready(() => {
  $("#table_id").DataTable();
});

$("#addGame").on("click", function (e){
  e.preventDefault();
  
  window.location.replace("../views/layouts/games.handlebars")
  
});

