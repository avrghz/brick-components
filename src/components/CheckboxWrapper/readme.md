# bk-checkbox-wrapper

This is a style wrapper for checkbox

```javascript
import { html } from 'lit-html'

html`
    <bk-checkbox-wrapper label="Option" indeterminate="false">
        <input type="checkbox" aria-hidden="false" value="option" name="options" />
    </bk-checkbox-wrapper>
`
```

<!-- Auto Generated Below -->

## Properties

| Property             | Attribute       | Description              | Type      | Default     |
| -------------------- | --------------- | ------------------------ | --------- | ----------- |
| `indeterminate`      | `indeterminate` | Show indeterminate state | `boolean` | `false`     |
| `label` _(required)_ | `label`         | Checkbox label           | `string`  | `undefined` |

---
