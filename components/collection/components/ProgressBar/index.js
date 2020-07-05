import { Component, h, Host, Prop } from '@stencil/core';
import ProgressLine from './components/ProgressLine';
import ProgressCircle from './components/ProgressCircle';
export class ProgressBar {
    constructor() {
        /** Progressed value. Must be between 0 and 100 */
        this.progress = 0;
        /** Display progressed value as a text along with the progress bar */
        this.showPercentageText = true;
        /** Display progressed value as a text, inside the progress bar.
         * This has effect only when `showPercentageText` is enabled and `barType` is line
         */
        this.textInside = false;
        /** Type of the progress bar */
        this.variant = 'default';
        /** Set the kind of progress bar */
        this.barType = 'line';
    }
    renderProgressBar(progressValue) {
        switch (this.barType) {
            case 'circle':
                return (h(ProgressCircle, { progress: progressValue, showPercentageText: this.showPercentageText, strokeDash: [295.31, 295.31], strokeDashOffset: 0 }));
            case 'dashboard':
                return (h(ProgressCircle, { progress: progressValue, showPercentageText: this.showPercentageText, strokeDash: [221.482, 295.31], strokeDashOffset: -36.9137, flip: true }));
            default:
                return (h(ProgressLine, { progress: progressValue, textInside: this.textInside, showPercentageText: this.showPercentageText }));
        }
    }
    render() {
        const progressValue = this.progress >= 0 ? (this.progress <= 100 ? this.progress : 100) : 0;
        return (h(Host, { role: "progressbar", "aria-valuenow": progressValue, "aria-valuemin": 0, "aria-valuemax": 100 },
            h("div", { class: `bk-progress ${this.variant} ${this.textInside ? 'bk-progress--text-inside' : ''}` }, this.renderProgressBar(progressValue))));
    }
    static get is() { return "bk-progress-bar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["./index.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["index.css"]
    }; }
    static get properties() { return {
        "progress": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Progressed value. Must be between 0 and 100"
            },
            "attribute": "progress",
            "reflect": false,
            "defaultValue": "0"
        },
        "showPercentageText": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Display progressed value as a text along with the progress bar"
            },
            "attribute": "show-percentage-text",
            "reflect": false,
            "defaultValue": "true"
        },
        "textInside": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Display progressed value as a text, inside the progress bar.\nThis has effect only when `showPercentageText` is enabled and `barType` is line"
            },
            "attribute": "text-inside",
            "reflect": false,
            "defaultValue": "false"
        },
        "variant": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "Variants",
                "resolved": "\"danger\" | \"default\" | \"info\" | \"success\" | \"warning\"",
                "references": {
                    "Variants": {
                        "location": "import",
                        "path": "../../shared/types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Type of the progress bar"
            },
            "attribute": "variant",
            "reflect": false,
            "defaultValue": "'default'"
        },
        "barType": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "BarType",
                "resolved": "\"circle\" | \"dashboard\" | \"line\"",
                "references": {
                    "BarType": {
                        "location": "import",
                        "path": "./types"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Set the kind of progress bar"
            },
            "attribute": "bar-type",
            "reflect": false,
            "defaultValue": "'line'"
        }
    }; }
}
