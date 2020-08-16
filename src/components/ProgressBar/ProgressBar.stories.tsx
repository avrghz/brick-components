import { html } from 'lit-html'
import { select, number, boolean } from '@storybook/addon-knobs'
import { VARIANTS } from '../../shared/types'
import { BAR_TYPE } from './types'

import notes from './readme.md'

export const ProgressBar = () => {
    const variant = select('variant', VARIANTS, 'default')
    const showPercentageText = boolean('show-percentage-text', true)
    const textInside = boolean('text-inside', false)
    const progress = number('progress', 50)
    const barType = select('bar-type', BAR_TYPE, 'line')

    return html` <div style=${barType !== 'line' ? 'width: 200px' : 'width:100%'}>
        <bk-progress-bar
            progress=${progress}
            bar-type=${barType}
            show-percentage-text=${showPercentageText}
            variant=${variant}
            text-inside=${textInside}
        />
    </div>`
}

ProgressBar.parameters = {
    notes,
}
