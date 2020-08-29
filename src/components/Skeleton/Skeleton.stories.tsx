import { html } from 'lit-html'
import { number } from '@storybook/addon-knobs'

import notes from './readme.md'

export const Skeleton = () => {
    const width = number('width', 1)
    const height = number('height', 20)
    const radius = number('radius', 50)

    return html`<bk-skeleton width=${width} height=${height} radius=${radius} />`
}

Skeleton.parameters = {
    notes,
}
