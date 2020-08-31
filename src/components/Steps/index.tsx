import { Component, h, Prop, EventEmitter, Event, Host } from '@stencil/core'
import ComplexProp from '../../shared/decorators/complexProp'
import Step from './step'
import { StepComponent, StepProps, Direction } from './types'

// !Fixme : add icon support

@Component({
    tag: 'bk-steps',
    scoped: true,
    styleUrl: './index.scss',
})
export class Steps {
    /** Center title and description */
    @Prop() isCentered = false

    /** Display direction */
    @Prop() direction: Direction = 'horizontal'

    /** Steps to be displayed */
    @ComplexProp('array') @Prop() steps: StepComponent[] | string = []

    /** This event is fired when clicked on a step */
    @Event({ bubbles: false }) bkClick!: EventEmitter<number>

    isStyleCentered = () => !!this.isCentered && this.direction === 'horizontal'

    computeStepStyle = (): StepProps['style'] => ({
        flexBasis: `${100 / (this.steps.length - (this.isStyleCentered() ? 0 : 1))}%`,
        marginRight: '0',
    })

    render() {
        return (
            <Host class={`is-${this.direction}`}>
                {(this.steps as StepComponent[]).map(({ icon, ...rest }, i) => (
                    <Step
                        onClick={() => this.bkClick.emit(i)}
                        direction={this.direction}
                        style={this.computeStepStyle()}
                        isCentered={this.isStyleCentered()}
                        isLast={this.steps.length - 1 === i}
                        step={i + 1}
                        // {...(!!icon ? { icon } : { step: i + 1 })}
                        {...rest}
                    />
                ))}
            </Host>
        )
    }
}
