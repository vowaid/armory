import React from 'react';
import { render } from '@testing-library/react';
import { Menu, SubMenu } from './Menu';

describe('Menu Tests', () => {
    it('should render Menu without errors with default props', () => {
        render(<Menu />);
    });

    it('should render SubMenu without errors with default props', () => {
        render(<SubMenu />);
    });
});