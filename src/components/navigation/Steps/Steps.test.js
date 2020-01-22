import React from 'react';
import { render } from '@testing-library/react';
import { Steps, Step } from './Steps';

describe('Steps Tests', () => {
    it('should render Steps without errors with default props', () => {
        render(<Steps />);
    });

    it('should render Step without errors with default props', () => {
        render(<Step />);
    });
});