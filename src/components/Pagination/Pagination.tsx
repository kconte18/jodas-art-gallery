import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

export default function Pagination(props: {handleSetPageNum: any, pageNum: number, maxPageNum: number}) {
    const [showPrevButton, setShowPrevButton] = useState(true);
    const [showNextButton, setShowNextButton] = useState(true);

    useEffect(() => {
        // change button to disabled
        setShowNextButton(true);
        setShowPrevButton(true);
        if(props.pageNum === 1) {
            setShowPrevButton(false);
        }
        if(props.pageNum === props.maxPageNum) {
            setShowNextButton(false);
        }
        // document.getElements
    }, [props.pageNum])

    return (
        <ul className={styles["pagination-container"]}>
            {/* Prev Button */}
            {showPrevButton && <li className={styles["pagination-item"]} onClick={props.handleSetPageNum}>&lt;&lt;</li>}
            {!showPrevButton && <li className={styles["pagination-item-disabled"]}>&lt;&lt;</li>}
            {/* All pages */}
            {[...Array(props.maxPageNum)].map((e, i) => <li className={props.pageNum === (i+=1) ? styles["pagination-item-active"] : styles["pagination-item"]} onClick={props.handleSetPageNum} key={i}>{i}</li>)}
            {/* Next Button */}
            {showNextButton && <li className={styles["pagination-item"]} onClick={props.handleSetPageNum}>&gt;&gt;</li>}
            {!showNextButton && <li className={styles["pagination-item-disabled"]}>&gt;&gt;</li>}
        </ul>
    );
}