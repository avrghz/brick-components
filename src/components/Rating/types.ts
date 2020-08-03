export interface StarProps {
    checked?: boolean
    hover?: boolean
    activeColor: string
    onClick: VoidFunction
    onMouseEnter: VoidFunction
    onMouseLeave: VoidFunction
}

export interface Colors {
    [key: number]: string
}
