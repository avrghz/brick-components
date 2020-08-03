import { Component, h, Host, State, Prop } from '@stencil/core'
import ComplexProp from '../../shared/decorators/complexProp'
import { Colors } from './types'
import Star from './star'

// Todo: float rating
// Todo: keyboard
// Todo: event on change
// Todo: smiley

@Component({
    tag: 'bk-rating',
    scoped: true,
    styleUrl: './index.scss',
})
export class Rating {
    private defaultColor = 'rgb(247, 186, 42)'
    private stars = [...Array(5).keys()]

    @State() hover = 0

    /** The rating out of 5 */
    @Prop({ reflect: true, mutable: true }) rating = 0

    /** The color for each rating */
    @ComplexProp('object') @Prop({ mutable: true }) colors: Colors | string = {}

    onClickHandler = (key: number) => {
        this.rating = key + 1
        this.hover = 0
    }

    onMouseHandler = (key: number, reset = false) => (this.hover = reset ? 0 : key + 1)

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
                {this.stars.map((key) => (
                    <Star
                        activeColor={this.colors[this.hover || Math.floor(this.rating)] || this.defaultColor}
                        checked={key + 1 <= this.rating && !this.hover}
                        hover={key + 1 <= this.hover}
                        onClick={() => this.onClickHandler(key)}
                        onMouseEnter={() => this.onMouseHandler(key)}
                        onMouseLeave={() => this.onMouseHandler(key, true)}
                    />
                ))}
            </Host>
        )
    }
}
