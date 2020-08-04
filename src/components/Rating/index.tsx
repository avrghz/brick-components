import { Component, h, Host, State, Prop, Event, EventEmitter, Watch, Element, Listen } from '@stencil/core'
import ComplexProp from '../../shared/decorators/complexProp'
import KeyboardFocus from '../../shared/decorators/keyboardFocus'
import { Colors, Size, SMILEY_ICONS } from './types'
import Star from './star'

// Todo: keyboard

@Component({
    tag: 'bk-rating',
    scoped: true,
    styleUrl: './index.scss',
})
export class Rating {
    private defaultColor = 'rgb(247, 186, 42)'
    private stars = [...Array(5).keys()]

    @KeyboardFocus() @Element() el!: HTMLElement

    @State() hover = 0

    /** The rating out of 5 */
    @Prop({ reflect: true, mutable: true }) rating = 0

    /** Size of the rating */
    @Prop() size: Size = 'medium'

    /** The color for each rating */
    @ComplexProp('object') @Prop({ mutable: true }) colors?: Colors | string

    /** show smiley instead of start */
    @Prop() asSmiley = false

    /** This event is fired when rating changed */
    @Event() bkChange!: EventEmitter<number>

    @Watch('rating')
    onRatingChange(current: number, previous: number) {
        if (current !== previous) {
            this.bkChange.emit(current)
        }
    }

    @Listen('keydown')
    onKeydownHandler(e: KeyboardEvent) {
        switch (e.key) {
            case 'ArrowRight':
            case 'ArrowUp': {
                const nextRating = this.rating + 1
                this.rating = nextRating > 5 ? 5 : nextRating
                break
            }
            case 'ArrowLeft':
            case 'ArrowDown': {
                const nextRating = this.rating - 1
                this.rating = nextRating < 0 ? 0 : nextRating
                break
            }
        }
    }

    isLessThen = (key: number, latex: number) => key + 1 <= latex

    getFillPercentage = (key: number) => (!this.hover && this.rating - key < 1 ? this.rating - key : 1)

    getActiveColor = () =>
        this.colors ? this.colors[this.hover || Math.ceil(this.rating)] || this.defaultColor : this.defaultColor

    getSmiley = (key: number) => {
        const threshold = this.hover || Math.ceil(this.rating)
        return SMILEY_ICONS[key + 1 <= threshold ? threshold - 1 : 2]
    }

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
                        <Star
                            hover={this.isLessThen(key, this.hover)}
                            size={this.size}
                            activeColor={this.getActiveColor()}
                            checked={
                                this.isLessThen(key, this.hover) ||
                                (this.isLessThen(key, Math.ceil(this.rating)) && !this.hover)
                            }
                            fillPercentage={this.getFillPercentage(key)}
                            {...(this.asSmiley
                                ? {
                                      icon: this.getSmiley(key),
                                  }
                                : {})}
                        />
                    </span>
                ))}
            </Host>
        )
    }
}
