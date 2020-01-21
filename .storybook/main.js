module.exports = {
  stories: ['../src/**/*.stories.js'],
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