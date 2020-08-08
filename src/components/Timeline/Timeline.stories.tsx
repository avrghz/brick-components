import { html } from 'lit-html'
import { text, select } from '@storybook/addon-knobs'
import { VARIANTS } from '../../shared/types'
import groupNotes from './readme.md'
import itemNotes from './TimelineItem/readme.md'

export default {
    title: 'Components/Timeline',
    component: 'bk-timeline',
}

export const SingleItem = () => {
    const time = text('time', '25-05-2020')
    const variant = select('variant', VARIANTS, 'default')

    return html`
        <bk-timeline-item time=${time} variant=${variant}>
            <h4>Update Github template</h4>
            <p>Tom committed 25-05-2020 20:46</p>
        </bk-timeline-item>
    `
}

SingleItem.story = {
    parameters: {
        notes: itemNotes,
    },
}

export const Group = () => {
    return html`
        <bk-timeline>
            <bk-timeline-item time="01-01-2020 19:20" variant="success">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:20</p>
            </bk-timeline-item>
            <bk-timeline-item time="01-01-2020 19:35" variant="success">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:35</p>
            </bk-timeline-item>
            <bk-timeline-item time="01-01-2020 19:50" variant="danger">
                <h4>Update Github template</h4>
                <p>Tom committed 01-01-2020 19:50</p>
            </bk-timeline-item>
        </bk-timeline>
    `
}

Group.story = {
    parameters: {
        notes: groupNotes,
    },
}
