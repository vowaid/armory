import React from 'react';
import { render } from '@testing-library/react';
import Cascader from './Cascader';

describe('Cascader Tests', () => {
    it('should render without errors with default props', () => {
        render(<Cascader />);
    });
});