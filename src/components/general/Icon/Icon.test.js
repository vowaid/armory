import React from 'react';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon Tests', () => {
    it('should render without errors with default props', () => {
        render(<Icon />);
    });
});