import styles from "./ArtPieceDetails.module.css";
import Modal from "../../shared/Modal/Modal";

export default function ArtPieceDetails(props: {onClose: any, artPiece: any}) {
    return (
        <Modal onClose={props.onClose}>
            <h1>Hello</h1>
            <button onClick={props.onClose}>Close</button>
        </Modal>
    )
}