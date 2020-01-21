import React from 'react';
import { render } from '@testing-library/react';
import { Col, Row } from './Grid';

describe('Grid Tests', () => {
    it('should render Col without errors with default props', () => {
        render(<Col />);
    });

    it('should render Row without errors with default props', () => {
        render(<Row />);
    });
});