import styles from "./ArtPiece.module.css";
import { ArtPieceModel } from "../../models/ArtPieceModel";

export default function ArtPiece(props: {artPiece: ArtPieceModel}) {

    return (
        <div className={styles["art-piece-container"]}>
            <img className={styles["main-picture"]} src={props.artPiece.mainPicture} alt="Not Found"/>
            <p className={styles.artist}>{props.artPiece.artist}</p>
        </div>
    );
}