import React from 'react';
import { render } from '@testing-library/react';
import { Layout, Header, Footer, Sider, Content } from './Layout';

describe('Layout Tests', () => {
    it('should render Layout without errors with default props', () => {
        render(<Layout />);
    });

    it('should render Header without errors with default props', () => {
        render(<Header />);
    });

    it('should render Footer without errors with default props', () => {
        render(<Footer />);
    });

    it('should render Sider without errors with default props', () => {
        render(<Sider />);
    });

    it('should render Content without errors with default props', () => {
        render(<Content />);
    });
});