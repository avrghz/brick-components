import { html } from 'lit-html'

export const Link = () => {
    return html`
        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Basic</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--default is-underline">
                    <span class="bk-link--inner">default</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--primary is-underline">
                    <span class="bk-link--inner">primary</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--success is-underline">
                    <span class="bk-link--inner">success</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--info is-underline">
                    <span class="bk-link--inner">info</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--warning is-underline">
                    <span class="bk-link--inner">warning</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--danger is-underline">
                    <span class="bk-link--inner">danger</span
                </a>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Disabled</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--default is-underline is-disabled">
                    <span class="bk-link--inner">default</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--primary is-underline is-disabled">
                    <span class="bk-link--inner">primary</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--success is-underline is-disabled">
                    <span class="bk-link--inner">success</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--info is-underline is-disabled">
                    <span class="bk-link--inner">info</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--warning is-underline is-disabled">
                    <span class="bk-link--inner">warning</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--danger is-underline is-disabled">
                    <span class="bk-link--inner">danger</span
                </a>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">No underline</h2>
        </div>
        <div class="bk-row">
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--default">
                    <span class="bk-link--inner">default</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--primary">
                    <span class="bk-link--inner">primary</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--success">
                    <span class="bk-link--inner">success</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--info">
                    <span class="bk-link--inner">info</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--warning">
                    <span class="bk-link--inner">warning</span
                </a>
            </div>
            <div class="bk-col-6 bk-col-sm-4 bk-col-md-2 mb-4 mb-md-0">
                <a href="#" target="_blank" class="bk-link bk-link--danger">
                    <span class="bk-link--inner">danger</span
                </a>
            </div>
        </div>
    `
}
