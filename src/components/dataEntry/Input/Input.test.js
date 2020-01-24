import React from 'react';
import { render } from '@testing-library/react';
import { Input, TextArea, InputGroup, SearchInput, PasswordInput } from './Input';

describe('Input Tests', () => {
    it('should render Input without errors with default props', () => {
        render(<Input />);
    });

    it('should render TextArea without errors with default props', () => {
        render(<TextArea />);
    });

    it('should render InputGroup without errors with default props', () => {
        render(<InputGroup />);
    });

    it('should render SearchInput without errors with default props', () => {
        render(<SearchInput />);
    });

    it('should render PasswordInput without errors with default props', () => {
        render(<PasswordInput />);
    });
});