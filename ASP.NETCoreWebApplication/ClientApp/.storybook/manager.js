// ./storybook/manager.ts
import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

const theme = create({
    base: 'light', // this will inherit the base properties of Storybooks'light theme

    // Base color
    colorSecondary: '#00CBA9', // Chateau Green

    // UI
    appBg: '#F6F9FC',
    appContentBg: '#FFFFFF',
    appBorderColor: 'rgba(0,0,0,.1)',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: '#333333',
    textInverseColor: '#FFFFFF',
    textMutedColor: '#666666',

    // Toolbar default and active colors
    barTextColor: '#999999',
    barSelectedColor: '#00CBA9',
    barBg: '#FFFFFF',

    // Form colors
    inputBg: '#FFFFFF',
    inputBorder: 'rgba(0,0,0,.3)',
    inputTextColor: '#333333',
    inputBorderRadius: 4,

    // Brand assets
    brandTitle: 'Ressources Relationnelles',
    /*brandImage:
        'https://raw.githubusercontent.com/CUBES1/Back-Office-E-Citoyen/1902f18ef055f6dcd5b9d68f6732bece4a6f1c3c/src/assets/ressLogo_ico.svg?token=AJBLHCUQP6JTGMDDLNFSC4LCPOXE2',*/
})

addons.setConfig({
    theme,
})