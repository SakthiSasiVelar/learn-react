import RestaurantCard from "./RestaurantCard"
import { restaurantList } from "../config"
import { useState , useEffect } from "react"


const filterRestaurantData = (searchText, restaurantList)=>{
  return restaurantList.filter(item=>{
    return item.info.name.toLowerCase().includes(searchText.toLowerCase());
  })
}

const Body = () =>{ 
  const[searchText, setSearchText] = useState("");
  const[allRestaurants , setAllRestaurants] = useState([]);
  const [filteredRestaurants , setFilteredRestaurants] = useState([]);
  

   useEffect(()=>{
     setAllRestaurants(restaurantList);
     setFilteredRestaurants(restaurantList);
   },[])
    return (
      <>
       <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)}></input>
       <button onClick={()=>{
         const data = filterRestaurantData(searchText , allRestaurants);
         setFilteredRestaurants(data);
        }
        }>Search</button>
        <div className="restaurant-card-list">
        {
          searchText.length === 0 ? (
              allRestaurants.map(restaurant =>{
                return <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
              })
          ): (
            filteredRestaurants.map(item =>{
              return <RestaurantCard {...item.info} key={item.info.id}/>
            })
          )
        }
         
        </div>
        
       
      </>
    )
}

export default Body;