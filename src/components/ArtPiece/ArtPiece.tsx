import styles from "./ArtPiece.module.css";
import { ArtPieceModel } from "../../models/ArtPieceModel";
import Card from "../../shared/Card/Card";

export default function ArtPiece(props: {artPiece: ArtPieceModel}) {

    return (
        <Card>
            <div className={styles["art-piece-container"]}>
                <img className={styles["main-picture"]} src={props.artPiece.mainPicture} alt="Not Found"/>
                <p className={styles.artist}>{props.artPiece.artist}</p>
            </div>
        </Card>
    );
}