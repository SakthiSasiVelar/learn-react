import { IMG_CDN_URL } from "../config";

const FoodCard = (props) => {
  const { imageId } = props.foodDetails;
  return (
    <div className="foodCard">
      <img src={IMG_CDN_URL + imageId} />
    </div>
  );
};

export default FoodCard;
