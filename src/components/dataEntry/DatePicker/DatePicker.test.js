import React from 'react';
import { render } from '@testing-library/react';
import { DatePicker, MonthPicker, RangePicker, WeekPicker } from './DatePicker';

describe('DatePicker Tests', () => {
    it('should render DatePicker without errors with default props', () => {
        render(<DatePicker />);
    });

    it('should render MonthPicker without errors with default props', () => {
        render(<MonthPicker />);
    });

    it('should render RangePicker without errors with default props', () => {
        render(<RangePicker />);
    });

    it('should render WeekPicker without errors with default props', () => {
        render(<WeekPicker />);
    });
});