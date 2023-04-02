import React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';

describe('Header component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Header />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(Header).toBeTruthy();
    })
})