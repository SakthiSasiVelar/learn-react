import { IMG_CDN_URL} from "../config";

const RestaurantCard = (props)=>{
  let {cloudinaryImageId , name ,cuisines} = props;
    return(
        <div className="card">
            <img src={IMG_CDN_URL+ cloudinaryImageId} />
            <h1>{name}</h1>
            {/* <h2>{cuisines.join(" , ")}</h2> */}
        </div>
    )
}

export default RestaurantCard;