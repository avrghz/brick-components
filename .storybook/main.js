const webpackFinal = require('./webpackFinal')
module.exports = {
    addons: ['@storybook/addon-notes/register', '@storybook/addon-knobs', '@storybook/addon-actions/register'],
    webpackFinal,
}
