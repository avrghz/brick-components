import { html } from 'lit-html'
import { select } from '@storybook/addon-knobs'
import { SHADOW } from './types'
import notes from './readme.md'

export const Card = () => {
    const shadow = select('shadow', SHADOW, 'never')

    return html`
        <div class="bk-row">
            <div class="bk-col-sm-16 bk-col-md-8 bk-col-sm-push-4 bk-col-md-push-8">
                <bk-card tabindex="0" shadow=${shadow}>
                    <div slot="header">
                        Card Heading
                    </div>
                    <div slot="body">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </bk-card>
            </div>
        </div>
    `
}

Card.parameters = {
    notes,
}
