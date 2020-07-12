import { Option, Callback } from './types'

export const dispatchEventCloseMenu = (dropdown: HTMLElement) => {
    dropdown.dispatchEvent(
        new Event('bkCloseDropdownMenu', {
            bubbles: false,
        })
    )
}

export const currentSelected = (options: Option[], selected: string | null) =>
    selected ? options.findIndex((option) => selected === option.value) : -1

export const hasEnabledOption = (options: Option[]) => !!options.find((o) => !o.disabled)

export const getFirstEnabledOption = (options: Option[]) => options.findIndex((o) => !o.disabled)

export const selectFirstEnabledOption = (options: Option[], callBack: Callback) => {
    const firstEnabledOption = getFirstEnabledOption(options)
    if (firstEnabledOption !== -1) {
        callBack(firstEnabledOption)
    }
}

export const selectLastEnabledOption = (options: Option[], callBack: Callback) => {
    const lastEnabledOption = getFirstEnabledOption([...options].reverse())
    if (lastEnabledOption !== -1) {
        callBack(options.length - 1 - lastEnabledOption)
    }
}

export const selectNextOption = (options: Option[], selected: string | null, callBack: Callback) => {
    if (!hasEnabledOption(options)) {
        return
    }

    const predictedNextIndex = currentSelected(options, selected) + 1
    let actualNextIndex = -1

    for (let i = predictedNextIndex; i < options.length; i++) {
        if (!options[i].disabled) {
            actualNextIndex = i
            break
        }
    }

    if (actualNextIndex !== -1) {
        callBack(actualNextIndex)
    }
}

export const selectPreviousOption = (options: Option[], selected: string | null, callBack: Callback) => {
    if (!hasEnabledOption(options)) {
        return
    }

    const predictedPreviousIndex = currentSelected(options, selected) - 1

    let actualPreviousIndex = -1

    for (let i = predictedPreviousIndex; i >= 0; i--) {
        if (!options[i].disabled) {
            actualPreviousIndex = i
            break
        }
    }

    if (actualPreviousIndex !== -1) {
        callBack(actualPreviousIndex)
    }
}
