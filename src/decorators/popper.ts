import { ComponentInterface } from '@stencil/core'
import { createPopper, Instance } from '@popperjs/core'

export type SetPopperInstance = Instance

interface Setting {
    reference: string
    popper: string
    controllingProp: string
}

export default ({ reference, popper, controllingProp }: Setting) => (target: ComponentInterface, property: string) => {
    let popperInstance: Instance

    const { componentDidLoad, componentDidUpdate, disconnectedCallback } = target

    const destroyPopper = () => {
        if (popperInstance) {
            popperInstance.destroy()
        }
    }

    const initPopper = (component: ComponentInterface) => {
        if (component[popper] && component[reference] && component[controllingProp]) {
            popperInstance = createPopper(component[reference], component[popper], {
                placement: 'bottom-end',
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
                    {
                        name: 'flip',
                        options: {
                            fallbackPlacements: ['bottom-start', 'top-end', 'top-start'],
                        },
                    },
                ],
            })

            component[property] = popperInstance
        } else {
            destroyPopper()
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
        if (this[property]) {
            this[property]()
        }

        return disconnectedCallback?.call(this)
    }
}
