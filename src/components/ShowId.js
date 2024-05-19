import { useParams } from "react-router-dom"


const ShowId = () =>{
    const {id} = useParams();
    return(
        <div>
            <h1>Show Id : {id}</h1>
        </div>
    )
}

export default ShowId;