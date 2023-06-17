import { useEffect, useState } from "react";
import ArtPiece from "../../components/ArtPiece/ArtPiece";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import FakeData from "../../data/FakeData.json";
import styles from "./ArtGalleryPage.module.css";

const maxPageNum: number = Math.ceil(FakeData.length / 6);

export default function ArtGalleryPage() {
    const [shownArtPieces, setShowArtPieces] = useState(FakeData.slice(0, 6));
    const [pageNum, setPageNum] = useState(1);

    const handleSetShowArtPieces = () => {

    }

    const handleSetPageNum = (event: any) => {
        if (event.target.textContent == pageNum.toString()) {
            console.log("Same Page");
            return;
        }
        else if (event.target.textContent == ">>") {
            console.log("Next");
            setPageNum((prevPageNum) => prevPageNum += 1)
        }
        else if (event.target.textContent == "<<") {
            console.log("Prev");
            setPageNum((prevPageNum) => prevPageNum += 1)
        }
        else {
            console.log("Page" + event.target.textContent);
            setPageNum((prevPageNum) => prevPageNum = Number(event.target.textContent))
        }
    }

    useEffect(() => {
        // Change shown art pieces (shownArtPieces)
        console.log(pageNum);
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