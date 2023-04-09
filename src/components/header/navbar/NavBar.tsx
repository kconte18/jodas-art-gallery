import "./NavBar.css";
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <ul className="navbar-container">
            <li className="navbar-item">
                <Link to="">Art Gallery</Link>
            </li>
            <li className="navbar-item">
                <Link to="/about">About</Link>
            </li>
            <li className="navbar-item">
                <Link to="/contact-me">Contact Me</Link>
            </li>
        </ul>
    )
}