import { ArtType } from "./ArtType";

export class ArtPieceModel {
    id: string;
    artist: string;
    title?: string;
    artType: ArtType;
    mainPicture: string;
    pictures?: string[];

    constructor(id: string, artist: string, type: ArtType, mainPicture: string) {
        this.id = id;
        this.artist = artist;
        this.artType = type;
        this.mainPicture = mainPicture;
    }
}