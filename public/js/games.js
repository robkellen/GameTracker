$(document).ready(() => {
  //getting references to our form and inputs
  const addForm = $("form.add");
  const titleInput = $("input#title-input");
  const genreInput = $("input#genre-input");
  const publisherInput = $("input#publisher-input");
  const systemInput = $("input#system-input");
  const ratingInput = $("input#rating-input");
  const wishlistInput = $("input#wishlist-input");
  const playingInput = $("input#playing-input");
  const beatenInput = $("input#beaten-input");

  //when submit button is clicked, we validate that the necessary fields are not blank
  addForm.on("submit", event => {
    event.preventDefault();
    const gameData = {
      title: titleInput.val().trim(),
      genre: genreInput.val().trim(),
      publisher: publisherInput.val().trim(),
      system: systemInput.val().trim(),
      rating: ratingInput.val().trim(),
      wishlist: wishlistInput.val().trim(),
      playing: playingInput.val().trim(),
      beaten: beatenInput.val().trim()
    };

    if (
      !gameData.title ||
      !gameData.genre ||
      !gameData.publisher ||
      !gameData.system ||
      !gameData.rating
    ) {
      return;
    }

    //if we have info in necessary inputs, run the addGame function
    addGame(
      gameData.title,
      gameData.genre,
      gameData.publisher,
      gameData.system,
      gameData.rating
    );
    titleInput.val("");
    genreInput.val("");
    publisherInput.val("");
    systemInput.val("");
    ratingInput.val("");
    wishlistInput.val("");
    playingInput.val("");
    beatenInput.val("");

    //Post to the members route.  If successful we're redirected to the members page.
    //Otherwise log errors
    function addGame(
      title,
      genre,
      publisher,
      system,
      rating,
      wishlist,
      playing,
      beaten
    ) {
      $.post("/api/games", {
        title: title,
        genre: genre,
        publisher: publisher,
        system: system,
        rating: rating,
        wishlist: wishlist,
        playing: playing,
        beaten: beaten,
      })
        .then(response => {
          console.log(response);
          window.location.replace("/members");
        })
        .catch(handleAddErr);
    }

    function handleAddErr(err) {
      $("alert .msg").text(err.responseJSON);
      $("#alert").fadeIn(500);
    }
  });
});
