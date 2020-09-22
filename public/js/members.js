$(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
  });
});
$(() => {
  $.get("/api/games", (req, res) => {});
  $("#table_id").DataTable({});
  $(".dt-add").each(function() {
    $(this).on("click", function(e) {
      e.preventDefault();
      window.location.replace("/games");
    });
  });

  //click event for edit button
  $(".dt-edit").on("click", handleGameEdit); 

  function handleGameEdit (){
    const currentGame = $(this).data.game;
    window.location.href = "/"
  }

  $('.dt-delete').each(function () {
		$(this).on('click', function(evt){
			$this = $(this);
			var dtRow = $this('tr');
			if(confirm("Are you sure to delete this game?")){
				var table = $('#table_id').DataTable();
				table.row(dtRow[0].rowIndex-1).remove().draw( false );
			}
    });
  });
});
