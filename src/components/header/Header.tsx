import WebsiteTitle from "./website-title/WebsiteTitle";
import NavBar from "./navbar/NavBar";
import "./Header.css";

export default function Header(){
    return (
        <div className="header-container">
            <WebsiteTitle />
            <NavBar />
        </div>
    )
}