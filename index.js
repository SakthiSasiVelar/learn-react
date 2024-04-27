import ReactDOM from 'react-dom/client';

const Title = () =>{
  return (
    <a>
      <img className="logo" alt="logo"  src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"  />
    </a>
  )
}


const HeaderComponent = () => {
  return (
    <div className='header'>
        <Title />
        <ul>
            <li>Home</li>
            <li>Offers</li>
            <li>About</li>
            <li>Help</li>
            <li>Cart</li>
        </ul>
    </div>
  )
}

export default HeaderComponent;
const BodyComponent = () =>{
    return (
        <div className="body-bg">
            <h1>Body</h1>
        </div>
    )
}

const FooterComponenet = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}


const AppLayout = ()=>{
    return(
        <div>
            <HeaderComponent />
            <BodyComponent />
            <FooterComponenet />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);