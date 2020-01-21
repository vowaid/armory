/* istanbul ignore file */
import { create } from '@storybook/theming';
import { Colors } from '../../themes/vowaid/styles';

import armoryLogo from '../../icons/armory/armory-logo.svg';

export default create({
    base: 'light',

    colorPrimary: Colors.BLANCO,
    colorSecondary: Colors.COBALT_500,

    // UI
    appBg: Colors.BLANCO,
    appContentBg: Colors.BLANCO,
    appBorderColor: Colors.BORDER,
    appBorderRadius: 4,

    // Typography
    fontBase: 'Helvetica Neue, Helvetica, Arial, sans-serif',
    fontCode: 'Consolas, "Liberation Mono", Menlo, Courier, monospace',

    // Text colors
    textColor: Colors.FONT_COLOR,
    textInverseColor: Colors.TITANIUM_200,

    // Toolbar default and active colors
    barTextColor: Colors.TITANIUM_600,
    barSelectedColor: Colors.FONT_COLOR,
    barBg: Colors.BLANCO,

    // Form colors
    inputBg: Colors.BLANCO,
    inputBorder: Colors.BORDER,
    inputTextColor: Colors.FONT_COLOR,
    inputBorderRadius: 4,

    brandTitle: 'armory',
    brandUrl: 'https://www.coxautoinc.com/',
    brandImage: armoryLogo,
});