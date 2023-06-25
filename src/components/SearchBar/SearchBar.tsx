import styles from "./SearchBar.module.css";
import searchIcon from "../../assets/search-icon.svg";

export default function SearchBar() {
    return(
        <div>
            <img src={searchIcon} className={styles["search-icon"]} alt="search" />
            <input className={styles.search} type="text" placeholder="Search Artist Name..."></input>
        </div>
    )
}