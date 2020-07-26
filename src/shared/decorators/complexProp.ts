import { ComponentInterface, Build as BUILD } from '@stencil/core'

type ComplexProp = 'array' | 'object'

const parseObj = (obj: string, type: ComplexProp) => {
    try {
        return JSON.parse(obj)
    } catch (e) {
        return type === 'array' ? [] : {}
    }
}

export default (propType: ComplexProp) => (target: ComponentInterface, property: string) => {
    /* tslint:disable-next-line */
    ;(BUILD as any).cmpWillLoad = true
    /* tslint:disable-next-line */
    ;(BUILD as any).cmpWillUpdate = true

    const { componentWillLoad, componentWillUpdate } = target

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
