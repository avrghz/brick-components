import { Component, h, Prop } from '@stencil/core'
import { uniqueId } from 'lodash'
import { composite, tween, styler } from 'popmotion'
import '@polymer/iron-icon/iron-icon'
import '@polymer/iron-icons/iron-icons'

@Component({
    tag: 'bk-collapse',
    shadow: true,
    styleUrl: './index.scss',
})
export class Collapse {
    private id = uniqueId()
    private tabPanelRef?: HTMLElement

    @Prop({ mutable: true, reflect: true }) open = false

    onClickHandler = () => (this.open = !this.open)

    componentDidUpdate() {
        if (this.tabPanelRef && this.open) {
            const element = styler(this.tabPanelRef)
            composite({
                opacity: tween({
                    from: 0,
                    to: 1,
                    duration: 150,
                }),
                height: tween({
                    from: '0%',
                    to: '100%',
                    duration: 300,
                }),
            }).start({
                update: ({ height, opacity }: { [key: string]: number }) => {
                    element.set('opacity', opacity).set('height', height)
                },
            })
        }
    }

    render() {
        return (
            <div
                class={{
                    'bk-collapse-item': true,
                    'is-active': this.open,
                }}
            >
                <div
                    role="tab"
                    aria-expanded={this.open}
                    aria-controls={`bk-collapse-content-${this.id}`}
                    aria-describedby={`bk-collapse-content-${this.id}`}
                >
                    <div
                        role="button"
                        id={`bk-collapse-head-${this.id}`}
                        tabIndex={0}
                        class={{
                            'bk-collapse-item__header': true,
                            focusing: this.open,
                        }}
                        onClick={this.onClickHandler}
                    >
                        <slot name="header"></slot>
                        <iron-icon icon="chevron-right" class="bk-collapse-item__arrow bk-icon-arrow-right" />
                    </div>
                </div>
                {this.open && (
                    <div
                        role="tabpanel"
                        aria-labelledby={`bk-collapse-head-${this.id}`}
                        id={`bk-collapse-content-${this.id}`}
                        class="bk-collapse-item__wrap"
                        ref={(el) => (this.tabPanelRef = el)}
                    >
                        <div class="bk-collapse-item__content">
                            <slot name="content"></slot>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}
