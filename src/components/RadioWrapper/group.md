# bk-checkbox-wrapper

Multiple radio buttons bound in one group

```javascript
import { html } from 'lit-html'

html`
    <div>
        <bk-radio-wrapper label="Option A">
            <input type="radio" aria-hidden="false" value="a" name="options" />
        </bk-radio-wrapper>
        <bk-radio-wrapper label="Option B">
            <input type="radio" aria-hidden="false" value="b" name="options" checked />
        </bk-radio-wrapper>
        <bk-radio-wrapper label="Option C">
            <input type="radio" aria-hidden="false" value="c" name="options" />
        </bk-radio-wrapper>
        <bk-radio-wrapper label="Option D">
            <input type="radio" aria-hidden="false" value="d" name="options" disabled />
        </bk-radio-wrapper>
    </div>
`
```
