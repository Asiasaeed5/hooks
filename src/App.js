import{useState} from "react"
import './App.css';
import {films} from "./Data"
import MovieList from "./MovieList"
import AddMovie from "./Addmovie";
import Filtermovie from "./Filtermovie";
function App() {
  let [movies,setMovies]=useState(films)
  let [text,setText]=useState("")
  console.log(text,"hello")
  const addfilm=(newf)=>{
    setMovies([...movies,newf])
  }
  return (
    <div className="App">
       <FilterMovie setText={setText} />
      <MovieList movies={movies} text={text} />
      <AddMovie addfilm={addfilm}/>
    </div>
  );
}

export default App;
