import veryDissatisfied from '../../assets/icons/smiley-very-dissatisfied.svg'
import dissatisfied from '../../assets/icons/smiley-dissatisfied.svg'
import neutral from '../../assets/icons/smiley-neutral.svg'
import satisfied from '../../assets/icons/smiley-satisfied.svg'
import verySatisfied from '../../assets/icons/smiley-very-satisfied.svg'

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
    icon?: string
}

export const SMILEY_ICONS = [veryDissatisfied, dissatisfied, neutral, satisfied, verySatisfied]
