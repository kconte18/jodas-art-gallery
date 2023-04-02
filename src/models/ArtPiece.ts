import { ArtType } from "./ArtType";

export class ArtPiece {
    artist: string;
    title: string;
    artType: ArtType;
    mainPicture: string;
    pictures?: string[];

    constructor(artist: string, title: string, type: ArtType, mainPicture: string) {
        this.artist = artist;
        this.title = title;
        this.artType = type;
        this.mainPicture = mainPicture;
    }
}