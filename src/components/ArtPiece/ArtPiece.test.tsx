import * as ReactDOM from "react-dom";
import ArtPiece from "./ArtPiece";

describe('Header component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ArtPiece />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(ArtPiece).toBeTruthy();
    })
})