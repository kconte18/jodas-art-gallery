import WebsiteTitle from "./WebsiteTitle/WebsiteTitle";
import NavBar from "./NavBar/NavBar";
import styles from "./Header.module.css";

export default function Header(){
    return (
        <div className={styles["header-container"]}>
            <WebsiteTitle />
            <NavBar />
        </div>
    )
}