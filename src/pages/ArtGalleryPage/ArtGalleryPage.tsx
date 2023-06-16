import ArtPiece from "../../components/ArtPiece/ArtPiece";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import FakeData from "../../data/FakeData.json";
import styles from "./ArtGalleryPage.module.css";

export default function ArtGalleryPage() {
    return (
        <div className={styles["art-gallery-container"]}>
            <SearchBar />
            <div className={styles["art-piece-list"]}>
                {FakeData.map((artItem: any) => <ArtPiece key={artItem.id} artPiece={artItem} />)}
            </div>
            <Pagination />
        </div>
    )
}