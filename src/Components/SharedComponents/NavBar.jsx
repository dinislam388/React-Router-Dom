// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <div>
            <div className="header">
                <div className="logo">🌷RoSe</div>
                <div className="navBar">
                    <ul>
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/error404">Resume</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                        <NavLink to="/login">LogIn</NavLink>
                    </ul>
                </div>
           </div>
            </div>
        </>
    );
};

export default NavBar;