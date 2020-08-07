import { html } from 'lit-html'

export default {
    title: 'Button',
    component: 'button',
}

export const BasicUsage = () => {
    return html` <div class="bk-row">
        <div class="bk-col">
            <button class="bk-button">Default</button>
            <button class="bk-button bk-button--primary">Primary</button>
            <button class="bk-button bk-button--success">Success</button>
            <button class="bk-button bk-button--warning">Warning</button>
            <button class="bk-button bk-button--info">Info</button>
            <button class="bk-button bk-button--danger">Danger</button>
        </div>
        <br />
        <div class="bk-col">
            <button class="bk-button is-plain">Plain</button>
            <button class="bk-button bk-button--primary is-plain">Primary</button>
            <button class="bk-button bk-button--success is-plain">Success</button>
            <button class="bk-button bk-button--warning is-plain">Warning</button>
            <button class="bk-button bk-button--info is-plain">Info</button>
            <button class="bk-button bk-button--danger is-plain">Danger</button>
        </div>
        <br />
        <div class="bk-col">
            <button class="bk-button is-round">Plain</button>
            <button class="bk-button bk-button--primary is-round">Primary</button>
            <button class="bk-button bk-button--success is-round">Success</button>
            <button class="bk-button bk-button--warning is-round">Warning</button>
            <button class="bk-button bk-button--info is-round">Info</button>
            <button class="bk-button bk-button--danger is-round">Danger</button>
        </div>
        <br />
        <div class="bk-col">
            <button class="bk-button is-disabled">Plain</button>
            <button class="bk-button bk-button--primary is-disabled">Primary</button>
            <button class="bk-button bk-button--success is-disabled">Success</button>
            <button class="bk-button bk-button--warning is-disabled">Warning</button>
            <button class="bk-button bk-button--info is-disabled">Info</button>
            <button class="bk-button bk-button--danger is-disabled">Danger</button>
        </div>
        <br />
        <div class="bk-col">
            <button class="bk-button bk-button--text">Text only</button>
            <button class="bk-button bk-button--text is-disabled">Text only</button>
        </div>
        <br />
        <div class="bk-col">
            <button class="bk-button">Default</button>
            <button class="bk-button bk-button--medium">Medium</button>
            <button class="bk-button bk-button--small">Small</button>
            <button class="bk-button bk-button--mini">Mini</button>
        </div>
    </div>`
}
