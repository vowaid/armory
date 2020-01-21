/* istanbul ignore file */
import { create } from '@storybook/theming';
import Colors from '../../themes/vowaid/colors';

import armoryLogo from '../../icons/armory/armory-logo.svg';

export default create({
    base: 'light',

    colorPrimary: 'white',
    colorSecondary: Colors.blue[55].hex,

    // UI
    appBg: 'white',
    appContentBg: 'white',
    appBorderColor: Colors.grayscale[45].hex,
    appBorderRadius: 4,

    // Typography
    fontBase: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontCode: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',

    // Text colors
    textColor: Colors.blue[5].hex,
    textInverseColor: Colors.grayscale[95].hex,

    // Toolbar default and active colors
    barTextColor: Colors.grayscale[65].hex,
    barSelectedColor: Colors.blue[5].hex,
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: Colors.BORDER,
    inputTextColor: Colors.blue[5].hex,
    inputBorderRadius: 4,

    brandTitle: 'armory',
    brandUrl: 'https://www.vowaidfoundation.org/',
    brandImage: armoryLogo,
});