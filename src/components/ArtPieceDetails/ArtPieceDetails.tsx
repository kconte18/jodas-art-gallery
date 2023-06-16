import styles from "./ArtPieceDetails.module.css";
import Modal from "../../shared/Modal/Modal";
import { ArtPieceModel } from "../../models/ArtPieceModel";

export default function ArtPieceDetails(props: {onClose: any, artPiece: ArtPieceModel}) {
    return (
        <Modal onClose={props.onClose}>
            {/* carrousel for multiple pictures */}
            <h1>{props.artPiece.artist}</h1>
            <h2>{props.artPiece.artType}</h2>
            <h2>{props.artPiece.title}</h2>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}