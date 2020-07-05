export const BAR_TYPE = ['line', 'circle', 'dashboard'] as const

export type BarType = typeof BAR_TYPE[number]

export interface ProgressProps {
    progress: number
    showPercentageText?: boolean
    textInside?: boolean
}

export interface ProgressTextProps extends Pick<ProgressProps, 'progress'> {
    show?: boolean
    isInnerText?: boolean
}

export interface ProgressCircleProps extends ProgressProps {
    strokeDash: [number, number]
    strokeDashOffset: number
    flip?: boolean
}
