import { Component, h, Host, State, Prop } from '@stencil/core'
import ComplexProp from '../../shared/decorators/complexProp'
import { Colors } from './types'
import Star from './star'

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
    @ComplexProp('object') @Prop({ mutable: true }) colors?: Colors | string

    isLessThen = (key: number, latex: number) => key + 1 <= latex

    fillPercentage = (key: number) => (!this.hover && this.rating - key < 1 ? `${(this.rating - key) * 100}%` : '100%')

    getActiveColor = () =>
        this.colors ? this.colors[this.hover || Math.ceil(this.rating)] || this.defaultColor : this.defaultColor

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
                    <span
                        class="bk-rate__item"
                        onClick={() => this.onClickHandler(key)}
                        onMouseEnter={() => this.onMouseHandler(key)}
                        onMouseLeave={() => this.onMouseHandler(key, true)}
                    >
                        <Star hover={this.isLessThen(key, this.hover)} />
                        {this.isLessThen(key, this.hover) ||
                        (this.isLessThen(key, Math.ceil(this.rating)) && !this.hover) ? (
                            <span
                                class="bk-rate__fill"
                                style={{
                                    width: this.fillPercentage(key),
                                }}
                            >
                                <Star activeColor={this.getActiveColor()} hover={key + 1 <= this.hover} />
                            </span>
                        ) : null}
                    </span>
                ))}
            </Host>
        )
    }
}
