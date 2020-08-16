const webpackFinal = require('./webpackFinal')

module.exports = {
    stories: ['../src/**/*.stories.tsx'],
    addons: [
        '@storybook/addon-notes/register',
        '@storybook/addon-knobs',
        '@storybook/addon-actions/register',
        'storybook-dark-mode/register',
    ],
    webpackFinal,
}
