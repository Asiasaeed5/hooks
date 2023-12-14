import MovieCard from "./MovieCard"

const MovieList =({movies,text})=>{
return(
<div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
{movies
.filter((el)=>el.name.toUpperCase().includes(text.toUpperCase()))
.map((el)=>
<MovieCard  el={el}/>
)}
</div>
)
}
export default MovieList