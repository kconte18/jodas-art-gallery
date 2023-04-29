import ArtPiece from "../../components/ArtPiece/ArtPiece";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";
import FakeData from "../../data/FakeData.json";
import "./ArtGalleryPage.css";

export default function ArtGalleryPage() {
    return (
        <div className="art-gallery-container">
            <p>Art Gallery page is working</p>
            <SearchBar />
            <div className="art-piece-list">
                {FakeData.map((artItem: any) => <ArtPiece key={artItem.id} artPiece={artItem} />)}
            </div>
            <Pagination />
        </div>
    )
}