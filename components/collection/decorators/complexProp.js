export default (propType) => (target, property) => {
    const { componentWillLoad, componentWillUpdate } = target;
    const parseObj = (obj, type) => {
        try {
            return JSON.parse(obj);
        }
        catch (e) {
            return type === 'array' ? [] : {};
        }
    };
    const setProp = (component) => {
        if (typeof component[property] === 'string') {
            component[property] = parseObj(component[property], propType);
        }
    };
    target.componentWillLoad = function () {
        setProp(this);
        return componentWillLoad === null || componentWillLoad === void 0 ? void 0 : componentWillLoad.call(this);
    };
    target.componentWillUpdate = function () {
        setProp(this);
        return componentWillUpdate === null || componentWillUpdate === void 0 ? void 0 : componentWillUpdate.call(this);
    };
};
