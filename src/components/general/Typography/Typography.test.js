import React from 'react';
import { render } from '@testing-library/react';
import { Paragraph, Text, Title } from './Typography';

describe('Typography Tests', () => {
    it('should render Paragraph without errors with default props', () => {
        render(<Paragraph />);
    });

    it('should render Text without errors with default props', () => {
        render(<Text />);
    });

    it('should render Title without errors with default props', () => {
        render(<Title />);
    });
});
