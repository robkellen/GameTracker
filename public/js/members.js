$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
});
$(document).ready(() => {
  $.get("/api/games", (req, res) => {});
  $("#table_id").DataTable({});
  $(".dt-add").each(function() {
    $(this).on("click", function(e) {
      e.preventDefault();
      window.location.replace("/games");
    });
  });
});
