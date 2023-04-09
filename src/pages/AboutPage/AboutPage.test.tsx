import * as ReactDOM from 'react-dom';
import AboutPage from './AboutPage';

describe('ArtGalleryPage component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<AboutPage />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(AboutPage).toBeTruthy();
    })
})