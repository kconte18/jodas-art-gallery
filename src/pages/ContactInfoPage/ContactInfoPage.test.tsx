import * as ReactDOM from 'react-dom';
import ContactInfoPage from './ContactInfoPage';

describe('ArtGalleryPage component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ContactInfoPage />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(ContactInfoPage).toBeTruthy();
    })
})