import "./styles.css";
import React, { useState } from "react";

const movieLibrary = {
  Action: [
    { name: "The Rise of Cobra", rating: "4/5" },
    { name: "The Killer", rating: "4.5/5" },
    { name: "Hard Boiled", rating: "4/5" }
  ],

  Comedy: [
    { name: "How to Lose a Guy in 10 days(2003)", rating: "4/5" },
    { name: "Sleepless in Seattle", rating: "5/5" },
    { name: "Rush Hour", rating: "3.5/5" }
  ],

  Crime: [
    { name: "Heat(1995)", rating: "4/5" },
    { name: "The Score(2001)", rating: "3.5/5" },
    { name: "Gangster(2006)", rating: "5/5" }
  ]
};
export default function App() {
  const [selectedCateogry, setCategory] = useState("Action");

  function categoryClickHandler(movie) {
    setCategory(movie);
  }

  return (
    <div className="App">
      <h2>
        <span style={{ fontSize: "larger" }}>📀 </span> Movie Recommendation
      </h2>
      <h2></h2>

      <p>
        {" "}
        <small>
          {" "}
          Check out my favourite genres. Select a cateogory to get
          Recommendation.
        </small>{" "}
      </p>

      <div>
        {Object.keys(movieLibrary).map((movie) => (
          <button onClick={() => categoryClickHandler(movie)}>{movie}</button>
        ))}
      </div>

      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movieLibrary[selectedCateogry].map((movie) => (
            <li
              key={movie.name}
              style={{
                listStyle: "none",
                padding: "0.8rem",
                border: "0.5px solid black",
                borderRadius: "0.5rem",
                width: "50%",
                margin: "1rem"
              }}
            >
              {" "}
              <div> {movie.name}</div>
              <div style={{ fontSize: "smaller" }}> {movie.rating}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
