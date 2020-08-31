# bk-steps

Guide the user to complete tasks in accordance with the process.

```javascript
import { html } from 'lit-html'

export const STEP_STATE = ['process', 'wait', 'success', 'error', 'finish'] as const

interface StepComponent {
    title: string
    icon?: string
    description?: string
    status?: typeof STEP_STATE[number]
}

const steps: StepComponent[] = [
    {
        title: 'Title 1',
        description: 'Description 1',
        status: 'success',
    },
    {
        title: 'Title 2',
        status: 'process',
        description: 'Description 2',
    },
]

html`<bk-steps
    is-centered="false"
    direction="horizontal"
    steps=${JSON.stringify(steps)}
    @bkClick=${(e) => {
        console.log(e.detail)
    }}
/>`
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                  | Type                         | Default        |
| ------------ | ------------- | ---------------------------- | ---------------------------- | -------------- |
| `direction`  | `direction`   | Display direction            | `"horizontal" \| "vertical"` | `'horizontal'` |
| `isCentered` | `is-centered` | Center title and description | `boolean`                    | `false`        |
| `steps`      | `steps`       | Steps to be displayed        | `StepComponent[] \| string`  | `[]`           |


## Events

| Event     | Description                                | Type                  |
| --------- | ------------------------------------------ | --------------------- |
| `bkClick` | This event is fired when clicked on a step | `CustomEvent<number>` |


----------------------------------------------


