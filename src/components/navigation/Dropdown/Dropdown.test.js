import React from 'react';
import { render } from '@testing-library/react';
import Dropdown from './Dropdown';

describe('Dropdown Tests', () => {
    it('should render without errors with default props', () => {
        render(<Dropdown />);
    });
});