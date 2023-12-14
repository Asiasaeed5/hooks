
import React, { useState } from "react";
import './App.css';
import { films } from "./Data";
import MovieList from "./MovieList";
import AddMovie from "./Addmovie";
import FilterMovie from "./Filtermovie";

function App() {
  let [movies, setMovies] = useState(films);
  let [text, setText] = useState("");

  const addfilm = (newf) => {
    setMovies([...movies, newf]);
  };

  return (
    <div className="App">
      <FilterMovie setText={setText} />
      <MovieList movies={movies} text={text} />
      <AddMovie addfilm={addfilm} />
    </div>
  );
}

export default App;