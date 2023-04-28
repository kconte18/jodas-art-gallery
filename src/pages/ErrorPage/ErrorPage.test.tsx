import * as ReactDOM from 'react-dom';
import ErrorPage from './ErrorPage';

describe('ArtGalleryPage component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ErrorPage />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(ErrorPage).toBeTruthy();
    })
})