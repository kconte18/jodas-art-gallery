import ArtPiece from "../../components/ArtPiece/ArtPiece";
import Pagination from "../../components/Pagination/Pagination";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function ArtGalleryPage() {
    return (
        <div className="art-gallery-container">
            <p>Art Gallery page is working</p>
            <SearchBar />
            <ArtPiece/>
            <Pagination/>
        </div>
    )
}