import styles from "./Pagination.module.css";

export default function Pagination() {
    return (
        <ul className={styles["pagination-container"]}>
            <li className={styles["pagination-item"]}>&lt;&lt;</li>
            <li className={styles["pagination-item"]}>1</li>
            <li className={styles["pagination-item"]}>2</li>
            <li className={styles["pagination-item"]}>3</li>
            <li className={styles["pagination-item"]}>4</li>
            <li className={styles["pagination-item"]}>5</li>
            <li className={styles["pagination-item"]}>&gt;&gt;</li>
        </ul>
    );
}