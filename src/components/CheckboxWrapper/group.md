# bk-checkbox-wrapper

Multiple checkboxes bound in one group

```javascript
import { html } from 'lit-html'

html`
    <div>
        <bk-checkbox-wrapper label="Apple">
            <input type="checkbox" aria-hidden="false" value="apple" name="fruits" />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Kiwi">
            <input type="checkbox" aria-hidden="false" value="kiwi" name="fruits" checked />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Grape">
            <input type="checkbox" aria-hidden="false" value="grape" name="fruits" checked disabled />
        </bk-checkbox-wrapper>
        <bk-checkbox-wrapper label="Orange">
            <input type="checkbox" aria-hidden="false" value="orange" name="fruits" disabled />
        </bk-checkbox-wrapper>
    </div>
`
```
