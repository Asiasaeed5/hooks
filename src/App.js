
import React, { useState } from "react";
import './App.css';
import { films } from "./Data";
import MovieList from "./MovieList";
import AddMovie from "./Addmovie";
import FilterMovie from "./Filtermovie";
import {  Routes, Route } from "react-router-dom"; // Fix import here
import Profile from "./Profile";

function App() {
  let [movies, setMovies] = useState(films);
  let [text, setText] = useState("");

  const addfilm = (newf) => {
    setMovies([...movies, newf]);
  };

  return (
    <div className="App">
  
        <Routes>
          <Route path="/" element={
            <>
              <FilterMovie setText={setText} />
              <MovieList movies={movies} text={text} />
              <AddMovie addfilm={addfilm} />
            </>
          } />
          <Route path="/Profile/:idfilm" element={<Profile />} />
        </Routes>
     
    </div>
  );
}

export default App;
