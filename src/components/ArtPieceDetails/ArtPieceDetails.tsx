// import styles from "./ArtPieceDetails.module.css";
import Modal from "../../shared/Modal/Modal";
import { ArtPieceModel } from "../../models/ArtPieceModel";
import styles from "./ArtPieceDetails.module.css";
import close from "../../assets/close.svg";

import Carousel from "../../shared/Carousel/Carousel";

export default function ArtPieceDetails(props: {onClose: any, artPiece: ArtPieceModel}) {
    return (
        <Modal onClose={props.onClose}>
            {/* <button className={styles['close-button']} onClick={props.onClose}>
                <img src={close} alt="close"/>
            </button> */}

            <img src={close} className={styles['close-button']} alt="close" onClick={props.onClose}/>
            {/* carrousel for multiple pictures */}
            <Carousel pictures={props.artPiece.pictures}/>
            <h1>{props.artPiece.artist}</h1>
            <h2>{props.artPiece.artType}</h2>
            <h2>{props.artPiece.title}</h2>
        </Modal>
    )
}