import FoodCard from "./FoodCard";
import { useState, useEffect } from "react";
import EmptyFilteredData from "./EmptyFilteredDataAlert";
import Shimmer from "./Shimmer";

const filterFoodList = (searchText, foodList) => {
  const filteredData = foodList.filter((food) =>
    food?.action?.text?.toLowerCase().includes(searchText?.toLowerCase())
  );
  return filteredData;
};

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [foodList, setFoodList] = useState([]);
  const [filteredFoodList, setFilteredFoodList] = useState([]);

  async function getFoodList() {
    const foodData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await foodData.json();
    setFoodList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
    setFilteredFoodList(json?.data?.cards[0]?.card?.card?.imageGridCards?.info);
  }

  useEffect(() => {
    getFoodList();
  }, []);

  return foodList?.length === 0 ? (
    <Shimmer />
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
