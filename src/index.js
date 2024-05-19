import ReactDOM from 'react-dom/client';
import {Header} from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';
import Login from './components/Login';
import About from './components/About';
import { Outlet, createBrowserRouter , RouterProvider} from 'react-router-dom';
import ShowId from './components/ShowId';



const AppLayout = ()=>{
    return(
        <div>
            <Header />
            <Outlet />
            <Footer /> 
        </div>
    )
}

const appRouter= createBrowserRouter([
    {
        path:'/',
        element:<AppLayout />,
        children : [
            {
                path:'/',
                element:<Body/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/home/:id',
                element:<ShowId/>
            }
            
        ]

    },
    {
        path:'/login',
        element:<Login />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);