import { html } from 'lit-html'

export default {
    title: 'Atoms',
    component: 'button',
}

export const Button = () => {
    return html`
        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Basic</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button">Default</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Plain</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button is-plain">Plain</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary is-plain">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success is-plain">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning is-plain">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info is-plain">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger is-plain">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Round</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button is-round">Round</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary is-round">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success is-round">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning is-round">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info is-round">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger is-round">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Disabled</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button is-disabled">Disabled</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--primary is-disabled">Primary</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--success is-disabled">Success</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--warning is-disabled">Warning</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--info is-disabled">Info</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--danger is-disabled">Danger</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Text only</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--text">Text only</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--text is-disabled">Disabled</button>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Size</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button">Default</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--medium">Medium</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--small">Small</button>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <button class="bk-button bk-button--mini">Mini</button>
            </div>
        </div>
    `
}
