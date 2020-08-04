import { html } from 'lit-html';
import { boolean, select, object } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { DIRECTION } from './types';
import stepsWithoutIcon from './__fixtures__/stepsWithoutIcon.json';
import stepsWithIcon from './__fixtures__/stepsWithIcon.json';
import notes from './readme.md';
export default {
    title: 'Steps',
    component: 'bk-steps',
    parameters: {
        notes,
    },
};
export const Default = () => {
    const isCentered = boolean('is-centered', false);
    const direction = select('direction', DIRECTION, 'horizontal');
    const steps = object('steps', stepsWithoutIcon);
    const bkClick = action('bkClick');
    return html `<bk-steps
        is-centered=${isCentered}
        direction=${direction}
        steps=${JSON.stringify(steps)}
        @bkClick=${(e) => bkClick(e.detail)}
        style=${direction === 'vertical' ? 'height:300px' : ''}
    />`;
};
export const WithIcons = () => {
    const isCentered = boolean('is-centered', false);
    const direction = select('direction', DIRECTION, 'horizontal');
    const steps = object('steps', stepsWithIcon);
    const bkClick = action('bkClick');
    return html `<bk-steps
        is-centered=${isCentered}
        direction=${direction}
        steps=${JSON.stringify(steps)}
        @bkClick=${(e) => bkClick(e.detail)}
        style=${direction === 'vertical' ? 'height:300px' : ''}
    />`;
};