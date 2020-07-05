import { Variants } from '../../shared/types';
import { BarType } from './types';
export declare class ProgressBar {
    /** Progressed value. Must be between 0 and 100 */
    progress: number;
    /** Display progressed value as a text along with the progress bar */
    showPercentageText: boolean;
    /** Display progressed value as a text, inside the progress bar.
     * This has effect only when `showPercentageText` is enabled and `barType` is line
     */
    textInside: boolean;
    /** Type of the progress bar */
    variant: Variants;
    /** Set the kind of progress bar */
    barType: BarType;
    renderProgressBar(progressValue: number): any;
    render(): any;
}
