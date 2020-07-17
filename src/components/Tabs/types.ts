export const POSITION = ['top', 'bottom', 'left', 'right'] as const

export type Position = typeof POSITION[number]

export const DEFAULT_POSITION: Position = POSITION[0]
