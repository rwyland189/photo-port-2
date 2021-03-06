import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

const categories = [
    { name: 'portraits', description: 'Portraits of people in my life'}
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory}/>);
    });

    // snapshot test - SOMETHING NOT PASSING HERE?
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory}/>);

        // assert value comparison
        expect(asFragment()).toMatchSnapshot();
    });
})

describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const { getByLabelText } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory}/>);

        // assert, gets 'camera' from the aria-label on the span that contains the emoji
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

describe('links are visible', () => {
    it('inserts text into the links', () => {
        // arrange
        const { getByTestId } = render(<Nav categories={categories} setCurrentCategory={mockSetCurrentCategory} currentCategory={mockCurrentCategory}/>);

        // assert homepage
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');

        // assert about
        expect(getByTestId('about')).toHaveTextContent('About Me');
    });
})