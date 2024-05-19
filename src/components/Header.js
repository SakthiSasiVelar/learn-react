import { useState } from "react";
import {Link , useNavigate} from 'react-router-dom'

export const Title = () =>{
  return (
    <a>
      <img className="logo" alt="logo"  src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"  />
    </a>
  )
}


export const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header'>
        <Title />
        <ul>
            <li><Link to="/">Home</Link></li>
            <li>Offers</li>
            <li><Link to="/about">About</Link></li>
            <li>Help</li>
            <li>Cart</li>
        </ul>
        <button onClick={()=> navigate("/login")}>Logout</button>
    </div>
  )
}
 