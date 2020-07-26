import { ComponentInterface, Build as BUILD } from '@stencil/core'

const hasFocusRing = (el: HTMLElement) => el.classList.contains('is-focus')

const removeKeyboardFocus = (el: HTMLElement) => el.classList.remove('is-focus')

const addKeyboardFocus = (el: HTMLElement) => {
    if (!hasFocusRing(el)) {
        el.classList.add('is-focus')
        document.addEventListener('mousedown', () => removeKeyboardFocus(el), {
            once: true,
        })
    }
}

const onKeyDownHandler = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
        addKeyboardFocus(e.currentTarget as HTMLElement)
    }
}

const onKeyUpHandler = (e: KeyboardEvent) => {
    const el = e.currentTarget as HTMLElement
    if (e.key === 'Tab' && hasFocusRing(el)) {
        removeKeyboardFocus(el)
    } else {
        addKeyboardFocus(el)
    }
}

const registerEvents = (target: ComponentInterface, property: string) => {
    // enable focus ring on tab in
    target[property].addEventListener('keyup', onKeyDownHandler)

    // enable focus ring on any key down
    target[property].addEventListener('keydown', onKeyUpHandler)
}

const deRegisterEvents = (target: ComponentInterface, property: string) => {
    target[property].removeEventListener('keyup', onKeyDownHandler)
    target[property].removeEventListener('keydown', onKeyUpHandler)
}

// @ts-ignore
export default () => (target: ComponentInterface, property: string) => {
    /* tslint:disable-next-line */
    ;(BUILD as any).cmpDidLoad = true
    /* tslint:disable-next-line */
    ;(BUILD as any).cmpDidUnload = true

    const { componentDidLoad, componentDidUnload } = target

    target.componentDidLoad = function () {
        registerEvents(this, property)
        return componentDidLoad?.call(this)
    }

    target.componentDidUnload = function () {
        deRegisterEvents(this, property)
        return componentDidUnload?.call(this)
    }
}
