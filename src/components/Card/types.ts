export const SHADOW = ['never', 'always', 'hover'] as const

export type Shadow = typeof SHADOW[number]
