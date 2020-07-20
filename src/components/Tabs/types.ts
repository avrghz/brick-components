export const POSITION = ['top', 'bottom', 'left', 'right'] as const

export const VARIANT = ['simple', 'card', 'border-card'] as const

export type Position = typeof POSITION[number]

export type Variant = typeof VARIANT[number]

export const DEFAULT_POSITION: Position = POSITION[0]
export const DEFAULT_VARIANT: Variant = VARIANT[0]
