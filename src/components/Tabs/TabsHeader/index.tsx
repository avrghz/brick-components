import { Component, h, Host } from '@stencil/core'

@Component({
    tag: 'bk-tabs-header',
    scoped: true,
    styleUrl: './index.scss',
})
export class TabsHeader {
    render() {
        return (
            <Host>
                <div class="bk-tabs-header">
                    <div class="bk-tabs-header__scroll">
                        <div role="tablist" class="bk-tabs-header__nav">
                            <div class="bk-tabs-header__active-bar" style={{ width: '30px' }}></div>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </Host>
        )
    }
}
