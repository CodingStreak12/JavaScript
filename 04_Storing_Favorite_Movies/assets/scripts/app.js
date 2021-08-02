/* ****************Selectors*************** */
// Add Movie Button
const openMovieModalButton = document.querySelector("header button");

// Modal element div
const addMovieModal = document.getElementById("add-modal");

// Backdrop div
const backdrop = document.getElementById("backdrop");

// cancel button
const cancelMovieModalButton =
  addMovieModal.querySelector(".modal__actions").firstElementChild;

// Add Button
const addMovieButton = cancelMovieModalButton.nextElementSibling;

//Movie List Array
const movieList = [];

// all inputs selector
const inputSelector = addMovieModal.querySelectorAll("input");

// This selects the section
const entryText = document.getElementById("entry-text");

//This selects the unordered list
const renderMovieList = document.getElementById("movie-list");

//This is for delete Modal card.
const deleteModalCard = document.getElementById("delete-modal");

/****************************************** */

/* ******************Fucntions************* */
const closeMovieDeletionModal = () => {
  toggleBackdrop();
  deleteModalCard.classList.remove("visible");
};
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movieList) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movieList.splice(movieIndex, 1);
  renderMovieList.children[movieIndex].remove();
};
// This Mehod will delete the movie from our array as well from dom.
const deleteMovieHandler = (movieId) => {
  deleteModalCard.classList.add("visible");
  toggleBackdrop();
  const cancleDeletionButon = deleteModalCard.querySelector(".btn--passive");
  const acceptDeletionButton = deleteModalCard.querySelector(".btn--danger");
  cancleDeletionButon.addEventListener("click", () => {
    closeMovieDeletionModal();
  });
};

// This will updateUI
const updateUI = () => {
  if (movieList.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};

//This will render added movie elements to the dom.
const renderListElement = (id, title, imageUrl, rating) => {
  const listItem = document.createElement("li");
  listItem.className = "movie-element";
  listItem.innerHTML = `
  <div class = "movie-element__image">
  <img src = ${imageUrl} alt = "${title}">
  </div>
  <div class = "movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5 stars</p>
  </div>
  `;
  listItem.addEventListener("click", deleteMovieHandler.bind(null, id));
  renderMovieList.append(listItem);
};
// This will clear the input fields.
const clearInput = () => {
  for (const input of inputSelector) {
    input.value = "";
  }
};

/* This function will:  
1. fetch data from the inputs 
2. This will add data Object to our array.
*/
const addMovieHandler = () => {
  const title = inputSelector[0].value;
  const imageUrl = inputSelector[1].value;
  const rating = inputSelector[2].value;

  if (
    title.trim() === "" ||
    imageUrl.trim() === "" ||
    rating.trim() === "" ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert("Please Enter Valid Value.");
    return;
  }
  const newMovie = {
    id: Math.random(),
    title: title,
    imageUrl: imageUrl,
    rating: rating,
  };
  movieList.push(newMovie);
  console.log(movieList);
  closeMovieModal();
  toggleBackdrop();
  updateUI();
  renderListElement(
    newMovie.id,
    newMovie.title,
    newMovie.imageUrl,
    newMovie.rating
  );
  clearInput();
};

// This mehtod will toggle the backdrop
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};
const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};
// This fucntion will toggle the movie modal
const openMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

// This will close the backdrop and modal card when backdrop is clicked.
const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
};

// This function will close the backdrop and modal card when cancel button is clicked.
const cancelMovieModalButtonHandler = () => {
  closeMovieModal();
  toggleBackdrop();
  clearInput();
};

/* **************************************** */

/* **************Event Listeners*********** */

// This event listener works with the "openMovieModalButton"
openMovieModalButton.addEventListener("click", openMovieModal);

// This will handle the click on backdrop
backdrop.addEventListener("click", backdropClickHandler);

// This will handle the click on the cancel button.
cancelMovieModalButton.addEventListener("click", cancelMovieModalButtonHandler);

//This will handle the click on the "addMoviebutton"
addMovieButton.addEventListener("click", addMovieHandler);

/* **************************************** */
