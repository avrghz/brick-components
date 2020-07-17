export const POSITION = ['top', 'bottom', 'left', 'right'] as const

export type Position = typeof POSITION[number]
