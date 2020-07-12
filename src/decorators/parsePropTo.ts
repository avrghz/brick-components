import { ComponentInterface } from '@stencil/core'
import { isEqual } from 'lodash'

type ComplexProp = 'array' | 'object'

const parseObj = (obj: string, type: ComplexProp) => {
    try {
        return JSON.parse(obj)
    } catch (e) {
        return type === 'array' ? [] : {}
    }
}

export default (propType: ComplexProp, state: string) => (target: ComponentInterface, property: string) => {
    let previousValue: any[] | object | null = null

    const { componentWillLoad, componentWillUpdate } = target

    const setPreviousValue = (component: ComponentInterface) =>
        (previousValue = propType === 'array' ? [...component[property]] : { ...component[property] })

    const setProp = (component: ComponentInterface) => {
        if (typeof component[property] === 'string') {
            const parsedObj = parseObj(component[property], propType)
            component[state] = [...parsedObj]
            component[property] = parsedObj
        } else {
            if (!isEqual(previousValue, component[property])) {
                setPreviousValue(component)
                component[state] = propType === 'array' ? [...component[property]] : { ...component[property] }
            }
        }
    }

    target.componentWillLoad = function () {
        setProp(this)
        setPreviousValue(this)
        return componentWillLoad?.call(this)
    }

    target.componentWillUpdate = function () {
        setProp(this)
        return componentWillUpdate?.call(this)
    }
}
