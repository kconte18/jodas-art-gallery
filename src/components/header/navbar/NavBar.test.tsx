import React from 'react';
import * as ReactDOM from 'react-dom';
import NavBar from './NavBar';

describe('NavBar component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<NavBar />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(NavBar).toBeTruthy();
    })
})