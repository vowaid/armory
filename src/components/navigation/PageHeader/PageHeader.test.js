import React from 'react';
import { render } from '@testing-library/react';
import PageHeader from './PageHeader';

describe('PageHeader Tests', () => {
    it('should render without errors with default props', () => {
        render(<PageHeader />);
    });
});