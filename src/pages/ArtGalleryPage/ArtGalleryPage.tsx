import { useEffect, useState } from "react";
import ArtPiece from "../../components/ArtPiece/ArtPiece";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
// import FakeData from "../../data/TestData.json";
import RealData from "../../data/RealData.json";
import styles from "./ArtGalleryPage.module.css";

const maxPageNum: number = Math.ceil(RealData.length / 6);

export default function ArtGalleryPage() {
    const [shownArtPieces, setShowArtPieces] = useState(RealData.slice(0, 6));
    const [pageNum, setPageNum] = useState(1);

    const handleSetPageNum = (event: any) => {
        if (event.target.textContent === pageNum.toString()) {
            return;
        }
        else if (event.target.textContent === ">>") {
            setPageNum((prevPageNum) => prevPageNum += 1)
        }
        else if (event.target.textContent === "<<") {
            setPageNum((prevPageNum) => prevPageNum -= 1)
        }
        else {
            setPageNum((prevPageNum) => prevPageNum = Number(event.target.textContent))
        }
    }

    useEffect(() => {
        // Change shown art pieces (shownArtPieces)
        setShowArtPieces(RealData.slice((pageNum - 1) * 6, pageNum * 6))
    }, [pageNum])

    return (
        <div className={styles["art-gallery-container"]}>
            <SearchBar />
            <div className={styles["art-piece-list"]}>
                {shownArtPieces.map((artItem: any) => <ArtPiece key={artItem.id} artPiece={artItem} />)}
            </div>
            <Pagination handleSetPageNum={handleSetPageNum} pageNum={pageNum} maxPageNum={maxPageNum} />
        </div>
    )
}