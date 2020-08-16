import { html } from 'lit-html'

export const Input = () => {
    return html`
        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Input</h2>
        </div>
        <div class="bk-row mb-8">
            <div class="bk-col-24">
                <div class="bk-row mb-4">
                    <div class="bk-col-md-12 mb-4 mb-md-0">
                        <div class="bk-input">
                            <input type="text" autocomplete="off" placeholder="Placeholder" class="bk-input__inner" />
                        </div>
                    </div>
                    <div class="bk-col-md-12">
                        <div class="bk-input is-disabled">
                            <input
                                type="text"
                                autocomplete="off"
                                placeholder="Disabled"
                                class="bk-input__inner"
                                disabled
                            />
                        </div>
                    </div>
                </div>
                <div class="bk-row">
                    <div class="bk-col-md-12 mb-4 mb-md-0">
                        <div class="bk-input bk-input-group bk-input-group--prepend">
                            <div class="bk-input-group__prepend">Http://</div>
                            <input type="text" autocomplete="off" placeholder="Please input" class="bk-input__inner" />
                        </div>
                    </div>
                    <div class="bk-col-md-12">
                        <div class="bk-input bk-input-group bk-input-group--append">
                            <input type="text" autocomplete="off" placeholder="Please input" class="bk-input__inner" />
                            <div class="bk-input-group__append">Http://</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="bk-row mb-4">
            <h2 class="bk-col-24">Text area</h2>
        </div>

        <div class="bk-row">
            <div class="bk-col-md-12 mb-4 mb-md-0">
                <div class="bk-input">
                    <textarea
                        autocomplete="off"
                        rows="2"
                        placeholder="Placeholder"
                        class="bk-textarea__inner"
                    ></textarea>
                </div>
            </div>
            <div class="bk-col-md-12">
                <div class="bk-input is-disabled">
                    <textarea
                        autocomplete="off"
                        rows="2"
                        placeholder="Placeholder"
                        class="bk-textarea__inner"
                        disabled
                    ></textarea>
                </div>
            </div>
        </div>
    `
}
