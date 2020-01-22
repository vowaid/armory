import React from 'react';
import { render } from '@testing-library/react';
import Affix from './Affix';

describe('Affix Tests', () => {
    it('should render without errors with default props', () => {
        render(<Affix />);
    });
});