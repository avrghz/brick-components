import { ComponentInterface } from '@stencil/core'

type ComplexProp = 'array' | 'object'

export default (propType: ComplexProp) => (target: ComponentInterface, property: string) => {
    const { componentWillLoad, componentWillUpdate } = target

    const parseObj = (obj: string, type: ComplexProp) => {
        try {
            return JSON.parse(obj)
        } catch (e) {
            return type === 'array' ? [] : {}
        }
    }

    const setProp = (component: ComponentInterface) => {
        if (typeof component[property] === 'string') {
            component[property] = parseObj(component[property], propType)
        }
    }

    target.componentWillLoad = function () {
        setProp(this)
        return componentWillLoad?.call(this)
    }

    target.componentWillUpdate = function () {
        setProp(this)
        return componentWillUpdate?.call(this)
    }
}
