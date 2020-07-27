import { Component, h, Prop } from '@stencil/core'
import { Variants } from '../../../shared/types'

@Component({
    tag: 'bk-timeline-item',
    scoped: true,
    styleUrl: './index.scss',
})
export class TimelineItem {
    /** Time to be displayed */
    @Prop() time!: string

    /** The variant of node */
    @Prop() variant: Variants = 'default'

    render() {
        return (
            <div class="bk-timeline-item">
                <div class="bk-timeline-item__tail"></div>
                <div
                    class={`bk-timeline-item__node bk-timeline-item__node--normal bk-timeline-item__node--${this.variant}`}
                ></div>
                <div class="bk-timeline-item__wrapper">
                    <div class="bk-timeline-item__timestamp is-top">{this.time}</div>
                    <div class="bk-timeline-item__content">
                        <bk-card shadow="always">
                            <div slot="body">
                                <slot></slot>
                            </div>
                        </bk-card>
                    </div>
                </div>
            </div>
        )
    }
}
