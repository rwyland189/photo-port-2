// import react
import React from 'react';

// import functions from react testing library
import { render, cleanup } from '@testing-library/react';

// import extend-expect library from jest-dom
import '@testing-library/jest-dom/extend-expect';

// import About component
import About from '..';

// cleanup function
afterEach(cleanup);

// describe function to declare component being tested
describe('About component', () => {
    // first test - baseline to verify component is rendering
    it('renders', () => {
        render(<About />);
    });

    // second test - compare snapshot versions of the DOM node structure
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);

        expect(asFragment()).toMatchSnapshot();
    })
})