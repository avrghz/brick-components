import { JSXBase } from '@stencil/core/internal'

export const STEP_STATE = ['process', 'wait', 'success', 'error', 'finish'] as const

export interface StepComponent {
    step: number
    title: string
    description?: string
    state?: typeof STEP_STATE[number]
}

export interface StepProps extends StepComponent {
    style?: JSXBase.HTMLAttributes<HTMLDivElement>['style']
    isLast?: boolean
    isCentered?: boolean
}
