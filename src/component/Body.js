import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import { food } from "../config";
import EmptyFilteredData from "./EmptyFilteredDataAlert";

const filterFoodList = (searchText, foodList) => {
  const filteredData = foodList.filter((food) =>
    food.action.text.toLowerCase().includes(searchText.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [foodList, setFoodList] = useState(food);
  const [filteredFoodList, setFilteredFoodList] = useState(food);

  // async function getFoodList() {
  //   const foodData = await fetch(
  //     "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.89960&lng=80.22090&carousel=true&third_party_vendor=1"
  //   );
  //   const json = await foodData.json();
  //   setFoodList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  //   setFilteredFoodList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  // }

  useEffect(() => {
    // getFoodList();
  }, []);

  return foodList?.length < 1 ? (
    <h1>No data</h1>
  ) : (
    <div className="body">
      <h1>What's on your mind?</h1>
      <input
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      ></input>
      <button
        onClick={() => {
          const filteredData = filterFoodList(searchText, foodList);
          setFilteredFoodList(filteredData);
        }}
      >
        Search
      </button>
      <div className="foodList">
        {filteredFoodList.length === 0 ? (
          <EmptyFilteredData />
        ) : (
          filteredFoodList.map((item) => {
            return <FoodCard foodDetails={item} key={item.id} />;
          })
        )}
      </div>
    </div>
  );
};

export default Body;
