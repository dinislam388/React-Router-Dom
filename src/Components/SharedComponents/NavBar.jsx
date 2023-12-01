import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <div>
            <div className="header">
                <div className="logo">🌷RoSe</div>
                <div className="navBar">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/error404">Resume</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/login">LogIn</Link></li>
                    </ul>
                </div>
           </div>
            </div>
        </>
    );
};

export default NavBar;