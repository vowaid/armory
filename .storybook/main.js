module.exports = {
  // stories: ['../src/**/*.stories.js'],
  stories: [
    '../src/stories/**/*.stories.js',
    '../src/themes/**/*.stories.js',
    '../src/components/general/**/*.stories.js',
    '../src/components/layout/**/*.stories.js',
    '../src/components/navigation/**/*.stories.js',
    '../src/components/dataEntry/AutoComplete/**/*.stories.js',
    '../src/components/dataEntry/Cascader/**/*.stories.js',
    '../src/components/dataEntry/Checkbox/**/*.stories.js',
  ],
  addons: [
    // Order determines order in GUI panel nav
    '@storybook/addon-knobs',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    '@storybook/addon-actions',

    // Order does not matter for these
    '@storybook/addon-options',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@dump247/storybook-state',
    '@storybook/preset-create-react-app',
  ],
};