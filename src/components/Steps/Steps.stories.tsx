import { html } from 'lit-html'
import { boolean, select, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { DIRECTION, StepComponent } from './types'

import notes from './readme.md'

export default {
    title: 'Steps',
    component: 'bk-steps',
    parameters: {
        notes,
    },
}

export const Default = () => {
    const isCentered = boolean('is-centered', false)
    const direction = select('direction', DIRECTION, 'horizontal')

    const steps: StepComponent[] = object('steps', [
        {
            title: 'Title 1',
            description: 'Description 1',
            status: 'success',
        },
        {
            title: 'Title 2',
            status: 'process',
            description: 'Description 2',
        },
        {
            title: 'Title 3',
            status: 'wait',
            description: 'Description 3',
        },
    ])

    const bkClick = action('bkClick')

    return html`<bk-steps
        is-centered=${isCentered}
        direction=${direction}
        steps=${JSON.stringify(steps)}
        @bkClick=${(e: CustomEvent) => bkClick(e.detail)}
        style=${direction === 'vertical' ? 'height:300px' : ''}
    />`
}

export const WithIcons = () => {
    const isCentered = boolean('is-centered', false)
    const direction = select('direction', DIRECTION, 'horizontal')

    const steps: StepComponent[] = object('steps', [
        {
            title: 'Create',
            status: 'success',
            icon: 'create',
        },
        {
            title: 'Upload',
            status: 'process',
            icon: 'cloud-upload',
        },
        {
            title: 'Save',
            status: 'wait',
            icon: 'check-circle',
        },
    ])

    const bkClick = action('bkClick')

    return html`<bk-steps
        is-centered=${isCentered}
        direction=${direction}
        steps=${JSON.stringify(steps)}
        @bkClick=${(e: CustomEvent) => bkClick(e.detail)}
        style=${direction === 'vertical' ? 'height:300px' : ''}
    />`
}
