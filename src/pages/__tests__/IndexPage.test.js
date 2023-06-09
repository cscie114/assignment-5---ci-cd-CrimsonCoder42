import React from 'react';
import TestRenderer from 'react-test-renderer';
import IndexPage from '../index';
describe('IndexPage', () => {

    it('renders four movie links', () => {
        const testRenderer = TestRenderer.create(<IndexPage />);
        const testInstance = testRenderer.root;
        const links = testInstance.findAllByType('a');

        expect(links.length).toBe(8);
    });

    it('renders images with correct alt text', () => {
        const testRenderer = TestRenderer.create(<IndexPage />);
        const testInstance = testRenderer.root;
        const images = testInstance.findAllByType('img');

        expect(images[0].props.alt).toBe('John Wick');
        expect(images[1].props.alt).toBe('John Wick: Chapter 2');
        expect(images[2].props.alt).toBe('John Wick: Chapter 3 - Parabellum');
        expect(images[3].props.alt).toBe('John Wick: Chapter 4');
    });
});
