import * as ReactDOM from "react-dom";
import ArtPiece from "./ArtPiece";
import FakeData from "../../data/FakeData.json"
import { ArtPieceModel } from "../../models/ArtPieceModel";

describe('Header component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        const testArtPiece: any = FakeData[0];
        ReactDOM.render(<ArtPiece artPiece={testArtPiece}/>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(ArtPiece).toBeTruthy();
    })
})