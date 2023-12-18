import { useParams } from "react-router-dom";
import { films } from "./Data";
const Profile=()=>{
const {idfilm}=useParams()
console.log(idfilm,"testtttt")
const film=films.find((el)=>el.id===Number(idfilm))
console.log(film,"mofyyyy")
return(
<>

<iframe src={film.url} style={{width:"300px",height:"250px"}}></iframe>
</>
)
}
export default Profile