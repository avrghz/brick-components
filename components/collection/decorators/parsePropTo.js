import { isEqual } from 'lodash';
const parseObj = (obj, type) => {
    try {
        return JSON.parse(obj);
    }
    catch (e) {
        return type === 'array' ? [] : {};
    }
};
export default (propType, state) => (target, property) => {
    let previousValue = null;
    const { componentWillLoad, componentWillUpdate } = target;
    const setPreviousValue = (component) => (previousValue = propType === 'array' ? [...component[property]] : Object.assign({}, component[property]));
    const setProp = (component) => {
        if (typeof component[property] === 'string') {
            const parsedObj = parseObj(component[property], propType);
            component[state] = [...parsedObj];
            component[property] = parsedObj;
        }
        else {
            if (!isEqual(previousValue, component[property])) {
                setPreviousValue(component);
                component[state] = propType === 'array' ? [...component[property]] : Object.assign({}, component[property]);
            }
        }
    };
    target.componentWillLoad = function () {
        setProp(this);
        setPreviousValue(this);
        return componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
    };
    target.componentWillUpdate = function () {
        setProp(this);
        return componentWillUpdate === null || componentWillUpdate === void 0 ? void 0 : componentWillUpdate.call(this);
    };
};