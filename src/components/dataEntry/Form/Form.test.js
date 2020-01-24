import React from 'react';
import { render } from '@testing-library/react';
import Form from './Form';

describe('Form Tests', () => {
    it('should render without errors with default props', () => {
        render(<Form />);
    });
});