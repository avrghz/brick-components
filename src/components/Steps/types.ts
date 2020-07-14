import { JSXBase } from '@stencil/core/internal'

export const STEP_STATE = ['process', 'wait', 'success', 'error', 'finish'] as const

export const DIRECTION = ['vertical', 'horizontal'] as const

export interface StepComponent {
    title: string
    icon?: string
    description?: string
    status?: typeof STEP_STATE[number]
}

export type Direction = typeof DIRECTION[number]

export interface StepProps extends StepComponent {
    direction: Direction
    style?: JSXBase.HTMLAttributes<HTMLDivElement>['style']
    isLast?: boolean
    isCentered?: boolean
    step?: number
    onClick: VoidFunction
}
