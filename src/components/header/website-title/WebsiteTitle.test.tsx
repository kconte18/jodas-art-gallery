import React from 'react';
import * as ReactDOM from 'react-dom';
import WebsiteTitle from './WebsiteTitle';

describe('WebsiteTitle component tests', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<WebsiteTitle />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        expect(WebsiteTitle).toBeTruthy();
    })
})