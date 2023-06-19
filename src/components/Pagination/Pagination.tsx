import { useEffect, useState } from "react";
import styles from "./Pagination.module.css";

export default function Pagination(props: {handleSetPageNum: any, pageNum: number, maxPageNum: number}) {
    const allPagesArray: number[] = [];
    for(let ii = 1; ii <= props.maxPageNum; ii++) {
        allPagesArray.push(ii);
    }

    const [showPrevButton, setShowPrevButton] = useState(true);
    const [showNextButton, setShowNextButton] = useState(true);
    const [shownPagesArray, setShowPagesArray] = useState(allPagesArray.slice(1,4));
    const [prevDotDotDot, setPrevDotDotDot] = useState(false);
    const [nextDotDotDot, setNextDotDotDot] = useState(false);

    // Change button to disabled and changes the "middle number sections" based on position of pageNum
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
        let firstPage = props.pageNum - 2;
        let lastPage = props.pageNum + 1;
        if(props.pageNum === 1 || props.pageNum === 2 || props.pageNum === 3) {
            setShowPagesArray(allPagesArray.slice(1,4));
        }
        else if(lastPage === props.maxPageNum || props.pageNum === props.maxPageNum) {
            lastPage = props.maxPageNum - 1;
            setShowPagesArray(allPagesArray.slice(props.maxPageNum - 4 , props.maxPageNum - 1))
        }
        else {
            console.log("hi");
            setShowPagesArray(allPagesArray.slice(firstPage, lastPage))
        }
    }, [props.pageNum])

    // Shows ... between numbers
    useEffect(() => {
        if(shownPagesArray.includes(2)){
            setPrevDotDotDot(false);
        }
        else {
            setPrevDotDotDot(true);
        }
        if(shownPagesArray.includes(props.maxPageNum - 1)){
            setNextDotDotDot(false);
        }
        else {
            setNextDotDotDot(true);
        }
    }, [shownPagesArray])

    return (
        <ul className={styles["pagination-container"]}>
            {/* Prev Button */}
            {showPrevButton && <li className={styles["pagination-item"]} onClick={props.handleSetPageNum}>&lt;&lt;</li>}
            {!showPrevButton && <li className={styles["pagination-item-disabled"]}>&lt;&lt;</li>}
            {/* All pages */}
            <li className={props.pageNum === 1 ? styles["pagination-item-active"] : styles["pagination-item"]} onClick={props.handleSetPageNum}>1</li>
            {prevDotDotDot && <p>...</p>}
            {shownPagesArray.map((i) =>  <li className={props.pageNum === (i) ? styles["pagination-item-active"] : styles["pagination-item"]} onClick={props.handleSetPageNum} key={i}>{i}</li>)}
            {nextDotDotDot && <p>...</p>}
            <li className={props.pageNum === props.maxPageNum ? styles["pagination-item-active"] : styles["pagination-item"]} onClick={props.handleSetPageNum}>{props.maxPageNum}</li>
            {/* Next Button */}
            {showNextButton && <li className={styles["pagination-item"]} onClick={props.handleSetPageNum}>&gt;&gt;</li>}
            {!showNextButton && <li className={styles["pagination-item-disabled"]}>&gt;&gt;</li>}
        </ul>
    );
}