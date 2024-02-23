import { food } from "../config";
import FoodCard from "./FoodCard";
import { useState } from "react";

const filterFoodList = (searchText, foodList) => {
  const filteredData = foodList.filter((food) =>
    food.action.text.includes(searchText)
  );
  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [foodList, setFoodList] = useState(food);
  return (
    <div className="body">
      <h1>What's on your mind?</h1>
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!searchText) {
            setFoodList(food);
          } else {
            const currentFoodList = filterFoodList(searchText, food);
            setFoodList(currentFoodList);
          }
        }}
      >
        Search
      </button>
      <div className="foodList">
        {foodList.map((item) => {
          return <FoodCard foodDetails={item} />;
        })}
      </div>
    </div>
  );
};

export default Body;
