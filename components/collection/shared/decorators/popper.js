import { createPopper } from '@popperjs/core';
export default ({ reference, popper, controllingProp, modifiers = [], initialPlacement = 'auto', eventAfterOpened, eventAfterClosed, }) => (target, property) => {
    let popperInstance;
    const { componentDidLoad, componentDidUpdate, disconnectedCallback } = target;
    const emitEvent = (component, eventName) => {
        if (eventName) {
            component[eventName].emit();
        }
    };
    const destroyPopper = (component) => {
        if (popperInstance) {
            popperInstance.destroy();
            popperInstance = undefined;
            emitEvent(component, eventAfterClosed);
        }
    };
    const createPopperInstance = async (component) => {
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
        });
        component[popper].style.opacity = '1';
        return instance;
    };
    const initPopper = (component) => {
        if (component[popper] && component[reference] && component[controllingProp]) {
            if (!popperInstance) {
                createPopperInstance(component).then((instance) => {
                    popperInstance = instance;
                    component[property] = popperInstance;
                    emitEvent(component, eventAfterOpened);
                });
            }
        }
        else {
            destroyPopper(component);
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
        destroyPopper(this);
        return disconnectedCallback === null || disconnectedCallback === void 0 ? void 0 : disconnectedCallback.call(this);
    };
};
