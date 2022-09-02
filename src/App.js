import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [movieName, setMovieName] = useState([
    "Parasite",
    "La La Land",
    "Iron Man"
  ]);
  const [movieRating, setMovieRating] = useState(["10/10", "9.5/10", "9/10"]);

  function actionClickHandler() {
    setMovieName(["Mission Impossible", "Avengers", "Iron Man"]);
    setMovieRating(["9.2/10", "9.0/10", "10/10"]);
  }

  function horrorClickHandler() {
    setMovieName(["Conjuring", "Anabelle", "The Exorcist"]);
    setMovieRating(["8.8/10", "9.7/10", "10/10"]);
  }
  function comedyClickHandler() {
    setMovieName(["Hera Pheri", "Golmaal", "Welcome"]);
    setMovieRating(["10/10", "9.3/10", "8/10"]);
  }
  return (
    <div className="App">
      <header>
        <h1>Movie Recommender</h1>
      </header>

      <button onClick={actionClickHandler}>Action</button>
      <button onClick={horrorClickHandler}>Horror</button>
      <button onClick={comedyClickHandler}>Comedy</button>

      <div>
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          <li>
            <div>{movieName[0]}</div>
            <div>{movieRating[0]}</div>
          </li>
          <li>
            <div>{movieName[1]}</div>
            <div>{movieRating[1]}</div>
          </li>
          <li>
            <div>{movieName[2]}</div>
            <div>{movieRating[2]}</div>
          </li>
        </ul>
      </div>
    </div>
  );
}
