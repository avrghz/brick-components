export interface Colors {
    [key: number]: string
}

export const SIZE = ['small', 'medium', 'large'] as const
export type Size = typeof SIZE[number]

export interface StarProps {
    hover?: boolean
    checked?: boolean
    activeColor: string
    size: Size
    fillPercentage: number
}
