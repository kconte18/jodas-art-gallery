import React from 'react';
import * as ReactDOM from 'react-dom';
import ArtGalleryPage from './ArtGalleryPage';

describe('ArtGalleryPage component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ArtGalleryPage />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(ArtGalleryPage).toBeTruthy();
    })
})