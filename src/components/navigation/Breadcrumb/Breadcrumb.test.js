import React from 'react';
import { render } from '@testing-library/react';
import { Breadcrumb, BreadcrumbItem } from './Breadcrumb';

describe('Breadcrumb Tests', () => {
    it('should render Breadcrumb without errors with default props', () => {
        render(<Breadcrumb />);
    });

    it('should render BreadcrumbItem without errors with default props', () => {
        render(<BreadcrumbItem />);
    });
});