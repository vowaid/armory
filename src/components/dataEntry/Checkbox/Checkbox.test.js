import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox, CheckboxGroup } from './Checkbox';

describe('Checkbox Tests', () => {
    it('should render Checkbox without errors with default props', () => {
        render(<Checkbox />);
    });

    it('should render CheckboxGroup without errors with default props', () => {
        render(<CheckboxGroup />);
    });
});