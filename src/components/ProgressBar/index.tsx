import { Component, h, Host, Prop } from '@stencil/core'
import { Variants } from '../../shared/types'
import ProgressLine from './components/ProgressLine'
import ProgressCircle from './components/ProgressCircle'
import { BarType } from './types'

@Component({
    tag: 'bk-progress-bar',
    shadow: true,
    styleUrl: './index.scss',
})
export class ProgressBar {
    /** Progressed value. Must be between 0 and 100 */
    @Prop() progress = 0

    /** Display progressed value as a text along with the progress bar */
    @Prop() showPercentageText = true

    /** Display progressed value as a text, inside the progress bar.
     * This has effect only when `showPercentageText` is enabled and `barType` is line
     */
    @Prop() textInside = false

    /** Type of the progress bar */
    @Prop() variant: Variants = 'default'

    /** Set the kind of progress bar */
    @Prop() barType: BarType = 'line'

    renderProgressBar(progressValue: number) {
        switch (this.barType) {
            case 'circle':
                return (
                    <ProgressCircle
                        progress={progressValue}
                        showPercentageText={this.showPercentageText}
                        strokeDash={[295.31, 295.31]}
                        strokeDashOffset={0}
                    />
                )
            case 'dashboard':
                return (
                    <ProgressCircle
                        progress={progressValue}
                        showPercentageText={this.showPercentageText}
                        strokeDash={[221.482, 295.31]}
                        strokeDashOffset={-36.9137}
                        flip={true}
                    />
                )
            default:
                return (
                    <ProgressLine
                        progress={progressValue}
                        textInside={this.textInside}
                        showPercentageText={this.showPercentageText}
                    />
                )
        }
    }

    render() {
        const progressValue = this.progress >= 0 ? (this.progress <= 100 ? this.progress : 100) : 0

        return (
            <Host role="progressbar" aria-valuenow={progressValue} aria-valuemin={0} aria-valuemax={100}>
                <div class={`bk-progress ${this.variant} ${this.textInside ? 'bk-progress--text-inside' : ''}`}>
                    {this.renderProgressBar(progressValue)}
                </div>
            </Host>
        )
    }
}
