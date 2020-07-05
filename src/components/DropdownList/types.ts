export interface Option {
    label: string
    value: string
    disabled?: boolean
}

export type Callback = (index: number) => void
