import { Component, h, Host, Prop } from '@stencil/core'

@Component({
    tag: 'bk-skeleton',
    scoped: true,
    styleUrl: './index.scss',
})
export class Skeleton {
    /**
     * Width of the skeleton.
     * The value is treated in pixels except if it is <= 1 will be treated as percentage
     */
    @Prop() width = 1

    /** Height of the skeleton. Value is treated in pixels */
    @Prop() height = 16

    /** Border radius of the skeleton. Value is treated in pixels */
    @Prop() radius = 0

    withUnit = (dimension: number) => (dimension <= 1 ? `${dimension * 100}%` : `${dimension}px`)

    render() {
        return (
            <Host
                style={{
                    width: this.withUnit(this.width),
                    height: `${this.height}px`,
                    borderRadius: `${this.radius}px`,
                }}
            />
        )
    }
}
