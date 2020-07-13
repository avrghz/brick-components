import { ComponentInterface } from '@stencil/core'
import { createPopper, Instance, Modifier, Placement } from '@popperjs/core'

export type SetPopperInstance = Instance

export interface Setting {
    reference: string
    popper: string
    controllingProp: string
    initialPlacement?: Placement
    modifiers?: Partial<Modifier<string, object>>[]
    eventAfterOpened?: string
    eventAfterClosed?: string
}

export default ({
    reference,
    popper,
    controllingProp,
    modifiers = [],
    initialPlacement = 'auto',
    eventAfterOpened,
    eventAfterClosed,
}: Setting) => (target: ComponentInterface, property: string) => {
    let popperInstance: Instance

    const { componentDidLoad, componentDidUpdate, disconnectedCallback } = target

    const emitEvent = (component: ComponentInterface, eventName?: string) => {
        if (eventName) {
            component[eventName].emit()
        }
    }

    const destroyPopper = (component: ComponentInterface) => {
        if (popperInstance) {
            popperInstance.destroy()
            emitEvent(component, eventAfterClosed)
        }
    }

    const createPopperInstance = async (component: ComponentInterface) => {
        const instance = createPopper(component[reference], component[popper], {
            placement: initialPlacement,
            modifiers: [
                {
                    name: 'arrow',
                    options: {
                        padding: 12,
                    },
                },
                {
                    name: 'offset',
                    options: {
                        offset: [0, 10],
                    },
                },
                ...modifiers,
            ],
        })

        component[popper].style.opacity = '1'

        return instance
    }

    const initPopper = (component: ComponentInterface) => {
        if (component[popper] && component[reference] && component[controllingProp]) {
            createPopperInstance(component).then((instance) => {
                popperInstance = instance
                component[property] = popperInstance
                emitEvent(component, eventAfterOpened)
            })
        } else {
            destroyPopper(component)
        }
    }

    target.componentDidLoad = function () {
        initPopper(this)
        return componentDidLoad?.call(this)
    }

    target.componentDidUpdate = function () {
        initPopper(this)
        return componentDidUpdate?.call(this)
    }

    target.disconnectedCallback = function () {
        destroyPopper(this)
        return disconnectedCallback?.call(this)
    }
}
