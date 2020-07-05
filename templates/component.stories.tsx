import { select, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import notes from './readme.md'

export default {
    title: '{{> folderName}}',
    component: '{{prefix}}-{{tag}}',
    parameters: {
        notes,
    },
}

export const Default = () => {
    return `<{{prefix}}-{{tag}} />`
}
