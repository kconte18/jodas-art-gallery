import WebsiteTitle from "./WebsiteTitle/WebsiteTitle";
import NavBar from "./NavBar/NavBar";
import "./Header.css";

export default function Header(){
    return (
        <div className="header-container">
            <WebsiteTitle />
            <NavBar />
        </div>
    )
}