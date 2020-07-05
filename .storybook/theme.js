import { create } from '@storybook/theming/create'

export default create({
    base: 'light',

    colorPrimary: '#409eff',
    colorSecondary: '#409eff',

    // UI
    appBg: '#ecf5ff',
    appContentBg: '#ecf5ff',
    appBorderColor: '#dcdfe6',
    appBorderRadius: 0,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#303133',

    // Toolbar default and active colors
    barTextColor: '#606266',
    barBg: '#ecf5ff',

    // // Form colors
    inputBg: 'transparent',
    inputBorder: '#dcdfe6',
    // inputTextColor: 'black',
    // inputBorderRadius: 4,

    brandTitle: 'Brick components',
    brandUrl: 'https://github.com/avrghz/brick-components',
})
