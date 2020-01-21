import Colors from './colors';
import { baseFontSize } from './constants';

export default {
    '$body-bg': 'white',
    '$body-color': Colors.blue[5].hex,
    '$enable-gradients': false,
    '$enable-grid-classes': true,
    '$enable-hover-media-query': false,
    '$enable-print-styles': true,
    '$enable-rounded': true,
    '$enable-shadows': true,
    '$enable-transitions': true,
    '$font-family-base':
        'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    '$font-family-sans-serif':
        'Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    '$font-size-base': `${baseFontSize}px`,
    '$line-height-base': 1.4286,
};