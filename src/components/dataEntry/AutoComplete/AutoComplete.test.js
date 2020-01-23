import React from 'react';
import { render } from '@testing-library/react';
import AutoComplete from './AutoComplete';

describe('AutoComplete Tests', () => {
    it('should render without errors with default props', () => {
        render(<AutoComplete />);
    });
});