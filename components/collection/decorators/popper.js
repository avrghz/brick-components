import { createPopper } from '@popperjs/core';
export default ({ reference, popper, controllingProp }) => (target, property) => {
    let popperInstance;
    const { componentDidLoad, componentDidUpdate, disconnectedCallback } = target;
    const destroyPopper = () => {
        if (popperInstance) {
            popperInstance.destroy();
        }
    };
    const initPopper = (component) => {
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
            });
            component[property] = popperInstance;
        }
        else {
            destroyPopper();
        }
    };
    target.componentDidLoad = function () {
        initPopper(this);
        return componentDidLoad === null || componentDidLoad === void 0 ? void 0 : componentDidLoad.call(this);
    };
    target.componentDidUpdate = function () {
        initPopper(this);
        return componentDidUpdate === null || componentDidUpdate === void 0 ? void 0 : componentDidUpdate.call(this);
    };
    target.disconnectedCallback = function () {
        if (this[property]) {
            this[property]();
        }
        return disconnectedCallback === null || disconnectedCallback === void 0 ? void 0 : disconnectedCallback.call(this);
    };
};
