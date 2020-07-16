export interface Option {
    label: string
    value: string
    disabled?: boolean
}

export type Callback = (option: Option) => void
