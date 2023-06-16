import { useState } from "react";
import styles from "./Dropdown.module.css";

export default function Dropdown(props: any) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(props.items[0]);

    const handleShowDropdown = () => {
        setShowDropdown(prevShowDropdown => !prevShowDropdown);
    }

    const handleSelectedItem = (event: any) => {
        setSelectedItem(event.target.innerText);
        setShowDropdown(false);
    }

    const dropdownElement = <ul className={styles.dropdown}>{props.items.map((item: any) => <li className={styles["dropdown-item"]} key={item} onClick={handleSelectedItem}>{item}</li>)}</ul>

    return (
        <div className={styles["dropdown-container"]}>
            <div className={styles["toggle-dropdown"]} onClick={handleShowDropdown}>
                <p className={styles["selected-item"]}>{selectedItem}</p>
                {!showDropdown && <span className="material-icons">arrow_drop_down</span>}
                {showDropdown && <span className="material-icons">arrow_drop_up</span>}
            </div>
            {showDropdown && dropdownElement}
        </div>
    )
}