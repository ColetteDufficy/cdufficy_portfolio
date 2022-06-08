import { Link } from "react-router-dom";


const NavBar = () => {
    return ( 
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About Me</Link>
                <Link to="/about">Projects</Link>
                <Link to="/about">Contact Me</Link>
            </li>
        </ul>
     );
}
 
export default NavBar;