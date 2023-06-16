import styles from "./WebsiteTitle.module.css";

export default function WebsiteTitle() {
    return(
        <div className={styles["website-title-container"]}>
            <h1 className={styles["website-title"]}>Joda's Art Gallery</h1>
            <img className={styles["website-picture"]} src="https://www.si.edu/sites/default/files/blog/japanese-flying-squirrel-keishiro-shin_3-630x4201.jpg" alt="Oops"/>
        </div>
    )
}