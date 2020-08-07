import { html } from 'lit-html'

export default {
    title: 'Atoms',
    component: 'input',
}

export const Input = () => {
    return html`
        <h2>Input</h2>
        <div class="bk-row">
            <div class="bk-row">
                <div class="bk-col-md-12">
                    <div class="bk-input">
                        <input type="text" autocomplete="off" placeholder="Placeholder" class="bk-input__inner" />
                    </div>
                </div>
                <br class="bk-col-md-0" />
                <div class="bk-col-md-12">
                    <div class="bk-input is-disabled">
                        <input type="text" autocomplete="off" placeholder="Disabled" class="bk-input__inner" disabled />
                    </div>
                </div>
            </div>
        </div>

        <br />

        <div class="bk-row">
            <div class="bk-row">
                <div class="bk-col-md-12">
                    <div class="bk-input bk-input-group bk-input-group--prepend">
                        <div class="bk-input-group__prepend">Http://</div>
                        <input type="text" autocomplete="off" placeholder="Please input" class="bk-input__inner" />
                    </div>
                </div>
                <br class="bk-col-md-0" />
                <div class="bk-col-md-12">
                    <div class="bk-input bk-input-group bk-input-group--append">
                        <input type="text" autocomplete="off" placeholder="Please input" class="bk-input__inner" />
                        <div class="bk-input-group__append">Http://</div>
                    </div>
                </div>
            </div>
        </div>

        <br />

        <h2>Text area</h2>

        <div class="bk-row">
            <div class="bk-row">
                <div class="bk-col-md-12">
                    <div class="bk-input">
                        <textarea
                            autocomplete="off"
                            rows="2"
                            placeholder="Placeholder"
                            class="bk-textarea__inner"
                        ></textarea>
                    </div>
                </div>
                <br class="bk-col-md-0" />
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
        </div>
    `
}
