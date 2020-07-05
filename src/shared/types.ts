export const VARIANTS = ['default', 'danger', 'warning', 'success', 'info'] as const
export type Variants = typeof VARIANTS[number]

export const SHADES = ['light', 'dark'] as const
export type Shades = typeof SHADES[number]

export const BUTTON_VARIANTS = [...VARIANTS, 'text', 'primary'] as const
export type ButtonVariants = typeof BUTTON_VARIANTS[number]
