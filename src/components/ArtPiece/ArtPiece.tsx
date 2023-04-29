import "./ArtPiece.css";
import { ArtPieceModel } from "../../models/ArtPieceModel";

export default function ArtPiece(props: {artPiece: ArtPieceModel}) {

    return (
        <div className="art-piece-container">
            <img className="main-picture" src={props.artPiece.mainPicture} alt="Not Found"/>
            <p className="artist">{props.artPiece.artist}</p>
        </div>
    );
}