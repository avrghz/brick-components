import { Component, h, Prop } from '@stencil/core'
import Step from './step'
import { StepComponent, StepProps } from './types'

@Component({
    tag: 'bk-steps',
    scoped: true,
    styleUrl: './index.scss',
})
export class Steps {
    @Prop() isCentered = false

    @Prop() steps: StepComponent[] = [
        {
            step: 1,
            title: 'Title 1',
            description: 'Description 1',
            state: 'error',
        },
        {
            step: 2,
            title: 'Title 2',
            description: 'Description 2',
        },
        {
            step: 3,
            title: 'Title 3',
            description: 'Description 3',
        },
    ]

    computeStepStyle = (): StepProps['style'] => ({
        flexBasis: `${100 / (this.steps.length - (!!this.isCentered ? 0 : 1))}%`,
        marginRight: '0',
    })

    render() {
        return (
            <div class="bk-steps bk-steps--horizontal">
                {this.steps.map((step, i) => (
                    <Step
                        {...step}
                        style={this.computeStepStyle()}
                        isCentered={this.isCentered}
                        isLast={this.steps.length - 1 === i}
                    />
                ))}
            </div>
        )
    }
}
