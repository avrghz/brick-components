import { Component, h, Host, State, Prop } from '@stencil/core'
import Star from './star'

@Component({
    tag: 'bk-rating',
    scoped: true,
    styleUrl: './index.scss',
})
export class Rating {
    private stars = [...Array(5).keys()]

    @State() hover?: number

    @Prop({ reflect: true, mutable: true }) rating = 0

    onClickHandler = (index: number) => (this.rating = index + 1)

    render() {
        return (
            <Host
                role="slider"
                aria-valuetext=""
                aria-valuemin="0"
                aria-valuemax="5"
                tabIndex={0}
                class="bk-rate"
                aria-valuenow={this.rating}
            >
                {this.stars.map((s) => (
                    <Star checked={s <= this.rating - 1} onClick={() => this.onClickHandler(s)} />
                ))}
            </Host>
        )
    }
}
