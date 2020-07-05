import { Component, h, Prop } from '@stencil/core'
import { Shadow } from './types'

/**
 * @slot header - Use this to render the card header.
 * @slot body - Use this to render the card body.
 */
@Component({
    tag: 'bk-card',
    scoped: true,
    styleUrl: './index.scss',
})
export class Card {
    /** Set shadow of the component */
    @Prop() shadow: Shadow = 'never'

    render() {
        return (
            <div role="card" class={`bk-card is-${this.shadow}-shadow`}>
                <slot name="header"></slot>
                <slot name="body"></slot>
            </div>
        )
    }
}
