import styles from "./ArtPiece.module.css";
import { ArtPieceModel } from "../../models/ArtPieceModel";
import Card from "../../shared/Card/Card";
import { useState } from "react";
import ArtPieceDetails from "../ArtPieceDetails/ArtPieceDetails";

export default function ArtPiece(props: {artPiece: ArtPieceModel}) {
    const [showArtDetails, setShowArtDetails] = useState(false);

    const handleShowArtDetails = () => {
        setShowArtDetails((prevShowArtDetails) => !prevShowArtDetails)
    }

    return (
        <Card>
            <div className={styles["art-piece-container"]} onClick={handleShowArtDetails}>
                <img className={styles["main-picture"]} src={props.artPiece.mainPicture} alt="Not Found"/>
                <p className={styles.artist}>{props.artPiece.artist}</p>
            </div>
            {showArtDetails && <ArtPieceDetails onClose={handleShowArtDetails} artPiece={props.artPiece}/>}
        </Card>
    );
}