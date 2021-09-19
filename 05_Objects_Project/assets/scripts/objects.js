"use strict";
// Selectors
const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-btn");
const movieList = document.getElementById("movie-list");

const movies = [];

const team = {
  set teamName(value) {
    this._teamName = value;
  },
  get teamName() {
    return this._teamName;
  },
};
team.teamName = "Juventus";
console.log(team.teamName);
//Fucntions
const renderMovies = (search = "") => {
  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }
  // Appending one element at a time we have to take argument for that.....

  // const listElement = document.createElement("li");
  // let text = newMovie.info.title;
  // for (const key in newMovie.info) {
  //   if (key !== "title") {
  //     text += ` ${key}: ${newMovie.info[key]}`;
  //   }
  // }
  // listElement.textContent = text;
  // movieList.append(listElement);
  //
  // Clearing whole list and adding all values again....

  movieList.innerHTML = "";

  const filteredMovie = !search
    ? movies
    : movies.filter((movie) => {
        return movie.info.title.includes(search);
      });
  filteredMovie.forEach((movie) => {
    const listElement = document.createElement("li");
    let text = movie.info.title;
    for (const key in movie.info) {
      if (key !== "title") {
        text += ` ${key}: ${movie.info[key]}`;
      }
    }
    listElement.textContent = text;
    movieList.append(listElement);
  });
};
const clearInput = () => {
  document.getElementById("title").value = "";
  document.getElementById("extra-name").value = "";
  document.getElementById("extra-value").value = "";
};
const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;
  console.log("Hello");
  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }
  const newMovie = {
    info: {
      title: title,
      [extraName]: [extraValue],
    },
    id: Math.random(),
  };
  movies.push(newMovie);

  renderMovies();
  clearInput();
};

const searchMovieHandler = () => {
  const filterTerm = document.getElementById("filter-title").value;
  renderMovies(filterTerm);
};
addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);
