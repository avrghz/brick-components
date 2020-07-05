# bk-progress-bar

Progress is used to show the progress of current operation, and inform the user the current status.

```javascript
import { html } from 'lit-html'

html`
    <bk-progress-bar progress="50" bar-type="line" show-percentage-text="true" variant="default" text-inside="true" />
`
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property             | Attribute              | Description                                                                                                                                  | Type                                                        | Default     |
| -------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- | ----------- |
| `barType`            | `bar-type`             | Set the kind of progress bar                                                                                                                 | `"circle" \| "dashboard" \| "line"`                         | `'line'`    |
| `progress`           | `progress`             | Progressed value. Must be between 0 and 100                                                                                                  | `number`                                                    | `0`         |
| `showPercentageText` | `show-percentage-text` | Display progressed value as a text along with the progress bar                                                                               | `boolean`                                                   | `true`      |
| `textInside`         | `text-inside`          | Display progressed value as a text, inside the progress bar. This has effect only when `showPercentageText` is enabled and `barType` is line | `boolean`                                                   | `false`     |
| `variant`            | `variant`              | Type of the progress bar                                                                                                                     | `"danger" \| "default" \| "info" \| "success" \| "warning"` | `'default'` |


----------------------------------------------


