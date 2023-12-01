import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Resume from "../Pages/Resume/Resume";

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/home",
        element: <Home/>
    },
    {
        path: "/about",
        element: <About/>
    }, 
    {
        path: "/contact",
        element: <Contact/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/error404",
        element: <Resume/>
    }
])
export default Routes;