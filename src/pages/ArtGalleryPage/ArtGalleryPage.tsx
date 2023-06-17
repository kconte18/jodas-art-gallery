import { useState } from "react";
import ArtPiece from "../../components/ArtPiece/ArtPiece";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import FakeData from "../../data/FakeData.json";
import styles from "./ArtGalleryPage.module.css";

const maxPageNum: number = Math.ceil(FakeData.length/6);

export default function ArtGalleryPage() {
    const [shownArtPieces, setShowArtPieces] = useState(FakeData.slice(0,6));
    const [pageNum, setPageNum] = useState(1);

    const handleSetShowArtPieces = () => {

    }

    const handleSetPageNum = (event: any) => {
        console.log("Set Page");
        console.log(event.target.textContent);
        console.log(maxPageNum);
    }

    return (
        <div className={styles["art-gallery-container"]}>
            <SearchBar />
            <div className={styles["art-piece-list"]}>
                {shownArtPieces.map((artItem: any) => <ArtPiece key={artItem.id} artPiece={artItem} />)}
            </div>
            <Pagination handleSetPageNum={handleSetPageNum} pageNum={pageNum} maxPageNum={maxPageNum}/>
        </div>
    )
}