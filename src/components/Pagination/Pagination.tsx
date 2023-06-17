import styles from "./Pagination.module.css";

export default function Pagination(props: {handleSetPageNum: any, pageNum: number, maxPageNum: number}) {
    return (
        <ul className={styles["pagination-container"]}>
            <li className={styles["pagination-item"]} onClick={props.handleSetPageNum}>&lt;&lt;</li>
            {[...Array(props.maxPageNum)].map((e, i) => <li className={styles["pagination-item"]} onClick={props.handleSetPageNum} key={i}>{i+=1}</li>)}
            <li className={styles["pagination-item"]} onClick={props.handleSetPageNum}>&gt;&gt;</li>
        </ul>
    );
}