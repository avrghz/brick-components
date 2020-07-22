/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ButtonVariants, Shades, Variants } from "./shared/types";
import { Shadow } from "./components/Card/types";
import { Option } from "./components/DropdownList/types";
import { TriggerOn } from "./components/Popover/types";
import { Placement } from "@popperjs/core";
import { BarType } from "./components/ProgressBar/types";
import { Direction, StepComponent } from "./components/Steps/types";
import { AVChange } from "./components/Switch/types";
import { Position, Variant } from "./components/Tabs/types";
import { Position as Position1 } from "./components/Toast/types";
export namespace Components {
    interface BkAlert {
        /**
          * Make alert dismissible
         */
        "dismissible": boolean;
        /**
          * Light or dark
         */
        "shade": Shades;
        /**
          * Type of the alert
         */
        "variant": Variants;
    }
    interface BkCard {
        /**
          * Set shadow of the component
         */
        "shadow": Shadow;
    }
    interface BkCollapse {
        /**
          * Enable or disable collapse
         */
        "disabled": boolean;
        /**
          * Open or close the collapse
         */
        "open": boolean;
    }
    interface BkCollapseGroup {
        "isAccordion": boolean;
    }
    interface BkDropdown {
        /**
          * Close the menu when clicked outside
         */
        "clickOutsideToClose": boolean;
        /**
          * Enable or disable the dropdown
         */
        "disabled": boolean;
        /**
          * Open or close the menu
         */
        "open": boolean;
    }
    interface BkDropdownList {
        /**
          * Disable DropdownList
         */
        "disabled": boolean;
        /**
          * Text to show when no options available
         */
        "noOptionText": string;
        /**
          * Pass stringified object when used with vanilla Javascript
         */
        "options": Option[] | string;
        /**
          * With search
         */
        "searchable": boolean;
        /**
          * Set selected option
         */
        "selectedOption"?: string;
    }
    interface BkModal {
        /**
          * Is dismissible or not
         */
        "dismissible": boolean;
        /**
          * Header to be shown
         */
        "header"?: string;
        /**
          * Show or hide the modal
         */
        "open": boolean;
    }
    interface BkPopConfirm {
        /**
          * Cancel button text
         */
        "cancelButtonText": string;
        /**
          * Cancel button variant
         */
        "cancelButtonVariant": ButtonVariants;
        /**
          * Confirm button text
         */
        "confirmButtonText": string;
        /**
          * Confirm button variant
         */
        "confirmButtonVariant": ButtonVariants;
        /**
          * Enable or disable popover
         */
        "disabled": boolean;
        /**
          * Message to show
         */
        "message"?: string;
    }
    interface BkPopover {
        /**
          * Enable or disable popover
         */
        "disabled": boolean;
        /**
          * This will set the trigger even
         */
        "placement": Placement;
        /**
          * show or hide the popover.
         */
        "show": boolean;
        /**
          * This will set the trigger even
         */
        "triggerOn": TriggerOn;
    }
    interface BkProgressBar {
        /**
          * Set the kind of progress bar
         */
        "barType": BarType;
        /**
          * Progressed value. Must be between 0 and 100
         */
        "progress": number;
        /**
          * Display progressed value as a text along with the progress bar
         */
        "showPercentageText": boolean;
        /**
          * Display progressed value as a text, inside the progress bar. This has effect only when `showPercentageText` is enabled and `barType` is line
         */
        "textInside": boolean;
        /**
          * Type of the progress bar
         */
        "variant": Variants;
    }
    interface BkSlider {
        /**
          * Enable or disable slider
         */
        "disabled": boolean;
        /**
          * Show or hide the tooltip
         */
        "showTooltip": boolean;
        /**
          * Set the stepper for the slider
         */
        "step": number;
        /**
          * Set value
         */
        "value": number;
        /**
          * Type of the slider
         */
        "variant": Variants;
    }
    interface BkSteps {
        /**
          * Display direction
         */
        "direction": Direction;
        /**
          * Center title and description
         */
        "isCentered": boolean;
        /**
          * Steps to be displayed
         */
        "steps": StepComponent[] | string;
    }
    interface BkSwitch {
        /**
          * Enable or disable switch
         */
        "disabled": boolean;
        /**
          * Set default state of the switch
         */
        "isOn": boolean;
        /**
          * Type of the alert
         */
        "variant": Variants;
    }
    interface BkTabHeader {
        /**
          * set active tab
         */
        "active": boolean;
        /**
          * Enable or disable tab
         */
        "disabled": boolean;
        /**
          * Unique tab id
         */
        "tab": string;
    }
    interface BkTabPanel {
        /**
          * Same value as tab header's tab value
         */
        "tab": string;
    }
    interface BkTabs {
        /**
          * Position of the tab
         */
        "position": Position;
        /**
          * Variant of the tab
         */
        "variant": Variant;
    }
    interface BkToast {
        /**
          * When provided, the toast will auto close after the specified time. (milliseconds)
         */
        "hideAfter": number;
        /**
          * Position of the toast
         */
        "position": Position;
        /**
          * Transition in duration  (milliseconds)
         */
        "transitionInDuration": number;
        /**
          * Transition out duration  (milliseconds)
         */
        "transitionOutDuration": number;
    }
}
declare global {
    interface HTMLBkAlertElement extends Components.BkAlert, HTMLStencilElement {
    }
    var HTMLBkAlertElement: {
        prototype: HTMLBkAlertElement;
        new (): HTMLBkAlertElement;
    };
    interface HTMLBkCardElement extends Components.BkCard, HTMLStencilElement {
    }
    var HTMLBkCardElement: {
        prototype: HTMLBkCardElement;
        new (): HTMLBkCardElement;
    };
    interface HTMLBkCollapseElement extends Components.BkCollapse, HTMLStencilElement {
    }
    var HTMLBkCollapseElement: {
        prototype: HTMLBkCollapseElement;
        new (): HTMLBkCollapseElement;
    };
    interface HTMLBkCollapseGroupElement extends Components.BkCollapseGroup, HTMLStencilElement {
    }
    var HTMLBkCollapseGroupElement: {
        prototype: HTMLBkCollapseGroupElement;
        new (): HTMLBkCollapseGroupElement;
    };
    interface HTMLBkDropdownElement extends Components.BkDropdown, HTMLStencilElement {
    }
    var HTMLBkDropdownElement: {
        prototype: HTMLBkDropdownElement;
        new (): HTMLBkDropdownElement;
    };
    interface HTMLBkDropdownListElement extends Components.BkDropdownList, HTMLStencilElement {
    }
    var HTMLBkDropdownListElement: {
        prototype: HTMLBkDropdownListElement;
        new (): HTMLBkDropdownListElement;
    };
    interface HTMLBkModalElement extends Components.BkModal, HTMLStencilElement {
    }
    var HTMLBkModalElement: {
        prototype: HTMLBkModalElement;
        new (): HTMLBkModalElement;
    };
    interface HTMLBkPopConfirmElement extends Components.BkPopConfirm, HTMLStencilElement {
    }
    var HTMLBkPopConfirmElement: {
        prototype: HTMLBkPopConfirmElement;
        new (): HTMLBkPopConfirmElement;
    };
    interface HTMLBkPopoverElement extends Components.BkPopover, HTMLStencilElement {
    }
    var HTMLBkPopoverElement: {
        prototype: HTMLBkPopoverElement;
        new (): HTMLBkPopoverElement;
    };
    interface HTMLBkProgressBarElement extends Components.BkProgressBar, HTMLStencilElement {
    }
    var HTMLBkProgressBarElement: {
        prototype: HTMLBkProgressBarElement;
        new (): HTMLBkProgressBarElement;
    };
    interface HTMLBkSliderElement extends Components.BkSlider, HTMLStencilElement {
    }
    var HTMLBkSliderElement: {
        prototype: HTMLBkSliderElement;
        new (): HTMLBkSliderElement;
    };
    interface HTMLBkStepsElement extends Components.BkSteps, HTMLStencilElement {
    }
    var HTMLBkStepsElement: {
        prototype: HTMLBkStepsElement;
        new (): HTMLBkStepsElement;
    };
    interface HTMLBkSwitchElement extends Components.BkSwitch, HTMLStencilElement {
    }
    var HTMLBkSwitchElement: {
        prototype: HTMLBkSwitchElement;
        new (): HTMLBkSwitchElement;
    };
    interface HTMLBkTabHeaderElement extends Components.BkTabHeader, HTMLStencilElement {
    }
    var HTMLBkTabHeaderElement: {
        prototype: HTMLBkTabHeaderElement;
        new (): HTMLBkTabHeaderElement;
    };
    interface HTMLBkTabPanelElement extends Components.BkTabPanel, HTMLStencilElement {
    }
    var HTMLBkTabPanelElement: {
        prototype: HTMLBkTabPanelElement;
        new (): HTMLBkTabPanelElement;
    };
    interface HTMLBkTabsElement extends Components.BkTabs, HTMLStencilElement {
    }
    var HTMLBkTabsElement: {
        prototype: HTMLBkTabsElement;
        new (): HTMLBkTabsElement;
    };
    interface HTMLBkToastElement extends Components.BkToast, HTMLStencilElement {
    }
    var HTMLBkToastElement: {
        prototype: HTMLBkToastElement;
        new (): HTMLBkToastElement;
    };
    interface HTMLElementTagNameMap {
        "bk-alert": HTMLBkAlertElement;
        "bk-card": HTMLBkCardElement;
        "bk-collapse": HTMLBkCollapseElement;
        "bk-collapse-group": HTMLBkCollapseGroupElement;
        "bk-dropdown": HTMLBkDropdownElement;
        "bk-dropdown-list": HTMLBkDropdownListElement;
        "bk-modal": HTMLBkModalElement;
        "bk-pop-confirm": HTMLBkPopConfirmElement;
        "bk-popover": HTMLBkPopoverElement;
        "bk-progress-bar": HTMLBkProgressBarElement;
        "bk-slider": HTMLBkSliderElement;
        "bk-steps": HTMLBkStepsElement;
        "bk-switch": HTMLBkSwitchElement;
        "bk-tab-header": HTMLBkTabHeaderElement;
        "bk-tab-panel": HTMLBkTabPanelElement;
        "bk-tabs": HTMLBkTabsElement;
        "bk-toast": HTMLBkToastElement;
    }
}
declare namespace LocalJSX {
    interface BkAlert {
        /**
          * Make alert dismissible
         */
        "dismissible"?: boolean;
        /**
          * Event fired when close button is clicked
         */
        "onBkClosed"?: (event: CustomEvent<null>) => void;
        /**
          * Light or dark
         */
        "shade"?: Shades;
        /**
          * Type of the alert
         */
        "variant"?: Variants;
    }
    interface BkCard {
        /**
          * Set shadow of the component
         */
        "shadow"?: Shadow;
    }
    interface BkCollapse {
        /**
          * Enable or disable collapse
         */
        "disabled"?: boolean;
        /**
          * This event is fired just before the panel closes
         */
        "onBkClose"?: (event: CustomEvent<any>) => void;
        /**
          * This event is fired after the panel is closed
         */
        "onBkClosed"?: (event: CustomEvent<any>) => void;
        /**
          * This event is fired just before the panel opens
         */
        "onBkOpen"?: (event: CustomEvent<any>) => void;
        /**
          * This event is fired after the panel is opened
         */
        "onBkOpened"?: (event: CustomEvent<any>) => void;
        /**
          * Open or close the collapse
         */
        "open"?: boolean;
    }
    interface BkCollapseGroup {
        "isAccordion"?: boolean;
    }
    interface BkDropdown {
        /**
          * Close the menu when clicked outside
         */
        "clickOutsideToClose"?: boolean;
        /**
          * Enable or disable the dropdown
         */
        "disabled"?: boolean;
        /**
          * Fired when destroyed
         */
        "onBkClosed"?: (event: CustomEvent<any>) => void;
        /**
          * Fired when opened
         */
        "onBkOpened"?: (event: CustomEvent<any>) => void;
        /**
          * Open or close the menu
         */
        "open"?: boolean;
    }
    interface BkDropdownList {
        /**
          * Disable DropdownList
         */
        "disabled"?: boolean;
        /**
          * Text to show when no options available
         */
        "noOptionText"?: string;
        /**
          * Fired on selecting option
         */
        "onBkSelect"?: (event: CustomEvent<Option>) => void;
        /**
          * Pass stringified object when used with vanilla Javascript
         */
        "options"?: Option[] | string;
        /**
          * With search
         */
        "searchable"?: boolean;
        /**
          * Set selected option
         */
        "selectedOption"?: string;
    }
    interface BkModal {
        /**
          * Is dismissible or not
         */
        "dismissible"?: boolean;
        /**
          * Header to be shown
         */
        "header"?: string;
        /**
          * Fired when modal is about to close
         */
        "onBkClose"?: (event: CustomEvent<any>) => void;
        /**
          * Fired after modal is closed
         */
        "onBkClosed"?: (event: CustomEvent<any>) => void;
        /**
          * Fired when modal is about to open
         */
        "onBkOpen"?: (event: CustomEvent<any>) => void;
        /**
          * Fired after modal is opened
         */
        "onBkOpened"?: (event: CustomEvent<any>) => void;
        /**
          * Show or hide the modal
         */
        "open"?: boolean;
    }
    interface BkPopConfirm {
        /**
          * Cancel button text
         */
        "cancelButtonText"?: string;
        /**
          * Cancel button variant
         */
        "cancelButtonVariant"?: ButtonVariants;
        /**
          * Confirm button text
         */
        "confirmButtonText"?: string;
        /**
          * Confirm button variant
         */
        "confirmButtonVariant"?: ButtonVariants;
        /**
          * Enable or disable popover
         */
        "disabled"?: boolean;
        /**
          * Message to show
         */
        "message"?: string;
        /**
          * on cancel action
         */
        "onBkCancelled"?: (event: CustomEvent<any>) => void;
        /**
          * on confirm action
         */
        "onBkConfirmed"?: (event: CustomEvent<any>) => void;
    }
    interface BkPopover {
        /**
          * Enable or disable popover
         */
        "disabled"?: boolean;
        /**
          * Fired when destroyed
         */
        "onBkClosed"?: (event: CustomEvent<any>) => void;
        /**
          * Fired when opened
         */
        "onBkOpened"?: (event: CustomEvent<any>) => void;
        /**
          * This will set the trigger even
         */
        "placement"?: Placement;
        /**
          * show or hide the popover.
         */
        "show"?: boolean;
        /**
          * This will set the trigger even
         */
        "triggerOn"?: TriggerOn;
    }
    interface BkProgressBar {
        /**
          * Set the kind of progress bar
         */
        "barType"?: BarType;
        /**
          * Progressed value. Must be between 0 and 100
         */
        "progress"?: number;
        /**
          * Display progressed value as a text along with the progress bar
         */
        "showPercentageText"?: boolean;
        /**
          * Display progressed value as a text, inside the progress bar. This has effect only when `showPercentageText` is enabled and `barType` is line
         */
        "textInside"?: boolean;
        /**
          * Type of the progress bar
         */
        "variant"?: Variants;
    }
    interface BkSlider {
        /**
          * Enable or disable slider
         */
        "disabled"?: boolean;
        /**
          * Fired when value changed
         */
        "onBkChange"?: (event: CustomEvent<any>) => void;
        /**
          * Show or hide the tooltip
         */
        "showTooltip"?: boolean;
        /**
          * Set the stepper for the slider
         */
        "step"?: number;
        /**
          * Set value
         */
        "value"?: number;
        /**
          * Type of the slider
         */
        "variant"?: Variants;
    }
    interface BkSteps {
        /**
          * Display direction
         */
        "direction"?: Direction;
        /**
          * Center title and description
         */
        "isCentered"?: boolean;
        /**
          * This event is fired when clicked on a step
         */
        "onBkClick"?: (event: CustomEvent<number>) => void;
        /**
          * Steps to be displayed
         */
        "steps"?: StepComponent[] | string;
    }
    interface BkSwitch {
        /**
          * Enable or disable switch
         */
        "disabled"?: boolean;
        /**
          * Set default state of the switch
         */
        "isOn"?: boolean;
        /**
          * Fired on every state change
         */
        "onBkChange"?: (event: CustomEvent<AVChange>) => void;
        /**
          * Type of the alert
         */
        "variant"?: Variants;
    }
    interface BkTabHeader {
        /**
          * set active tab
         */
        "active"?: boolean;
        /**
          * Enable or disable tab
         */
        "disabled"?: boolean;
        /**
          * Internal event
         */
        "on$tabHighlightReset"?: (event: CustomEvent<any>) => void;
        /**
          * Internal event
         */
        "on$tabSetActive"?: (event: CustomEvent<string>) => void;
        /**
          * Unique tab id
         */
        "tab": string;
    }
    interface BkTabPanel {
        /**
          * Same value as tab header's tab value
         */
        "tab": string;
    }
    interface BkTabs {
        /**
          * This event will fire on selection of a tab with tab id as detail
         */
        "onBkSelect"?: (event: CustomEvent<string>) => void;
        /**
          * Position of the tab
         */
        "position"?: Position;
        /**
          * Variant of the tab
         */
        "variant"?: Variant;
    }
    interface BkToast {
        /**
          * When provided, the toast will auto close after the specified time. (milliseconds)
         */
        "hideAfter"?: number;
        /**
          * Position of the toast
         */
        "position"?: Position;
        /**
          * Transition in duration  (milliseconds)
         */
        "transitionInDuration"?: number;
        /**
          * Transition out duration  (milliseconds)
         */
        "transitionOutDuration"?: number;
    }
    interface IntrinsicElements {
        "bk-alert": BkAlert;
        "bk-card": BkCard;
        "bk-collapse": BkCollapse;
        "bk-collapse-group": BkCollapseGroup;
        "bk-dropdown": BkDropdown;
        "bk-dropdown-list": BkDropdownList;
        "bk-modal": BkModal;
        "bk-pop-confirm": BkPopConfirm;
        "bk-popover": BkPopover;
        "bk-progress-bar": BkProgressBar;
        "bk-slider": BkSlider;
        "bk-steps": BkSteps;
        "bk-switch": BkSwitch;
        "bk-tab-header": BkTabHeader;
        "bk-tab-panel": BkTabPanel;
        "bk-tabs": BkTabs;
        "bk-toast": BkToast;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "bk-alert": LocalJSX.BkAlert & JSXBase.HTMLAttributes<HTMLBkAlertElement>;
            "bk-card": LocalJSX.BkCard & JSXBase.HTMLAttributes<HTMLBkCardElement>;
            "bk-collapse": LocalJSX.BkCollapse & JSXBase.HTMLAttributes<HTMLBkCollapseElement>;
            "bk-collapse-group": LocalJSX.BkCollapseGroup & JSXBase.HTMLAttributes<HTMLBkCollapseGroupElement>;
            "bk-dropdown": LocalJSX.BkDropdown & JSXBase.HTMLAttributes<HTMLBkDropdownElement>;
            "bk-dropdown-list": LocalJSX.BkDropdownList & JSXBase.HTMLAttributes<HTMLBkDropdownListElement>;
            "bk-modal": LocalJSX.BkModal & JSXBase.HTMLAttributes<HTMLBkModalElement>;
            "bk-pop-confirm": LocalJSX.BkPopConfirm & JSXBase.HTMLAttributes<HTMLBkPopConfirmElement>;
            "bk-popover": LocalJSX.BkPopover & JSXBase.HTMLAttributes<HTMLBkPopoverElement>;
            "bk-progress-bar": LocalJSX.BkProgressBar & JSXBase.HTMLAttributes<HTMLBkProgressBarElement>;
            "bk-slider": LocalJSX.BkSlider & JSXBase.HTMLAttributes<HTMLBkSliderElement>;
            "bk-steps": LocalJSX.BkSteps & JSXBase.HTMLAttributes<HTMLBkStepsElement>;
            "bk-switch": LocalJSX.BkSwitch & JSXBase.HTMLAttributes<HTMLBkSwitchElement>;
            "bk-tab-header": LocalJSX.BkTabHeader & JSXBase.HTMLAttributes<HTMLBkTabHeaderElement>;
            "bk-tab-panel": LocalJSX.BkTabPanel & JSXBase.HTMLAttributes<HTMLBkTabPanelElement>;
            "bk-tabs": LocalJSX.BkTabs & JSXBase.HTMLAttributes<HTMLBkTabsElement>;
            "bk-toast": LocalJSX.BkToast & JSXBase.HTMLAttributes<HTMLBkToastElement>;
        }
    }
}
