import styles from "./Pagination.module.css";

export default function Pagination() {
    return (
        <ul className={styles["pagination-container"]}>
            <li className={styles["pagination-container"]}>&lt;&lt;</li>
            <li className={styles["pagination-container"]}>1</li>
            <li className={styles["pagination-container"]}>2</li>
            <li className={styles["pagination-container"]}>3</li>
            <li className={styles["pagination-container"]}>4</li>
            <li className={styles["pagination-container"]}>5</li>
            <li className={styles["pagination-container"]}>&gt;&gt;</li>
        </ul>
    );
}