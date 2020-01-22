import React from 'react';
import { render } from '@testing-library/react';
import Pagination from './Pagination';

describe('Pagination Tests', () => {
    it('should render without errors with default props', () => {
        render(<Pagination />);
    });
});