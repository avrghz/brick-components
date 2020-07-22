# bk-tabs

```javascript
import { html } from 'lit-html'

html`<bk-tabs position=${position} variant=${variant} @bkSelect=${(e: CustomEvent) => {}}>
        <div slot="header">
            <bk-tab-header tab="tab_1" active="true">Config</bk-tab-header>
            <bk-tab-header tab="tab-2">I am very long tab 1</bk-tab-header>
            <bk-tab-header tab="tab-3">I am very long tab 2</bk-tab-header>
            <bk-tab-header tab="tab-4">User</bk-tab-header>
        </div>
        <bk-tab-panel tab="tab_1">Config content</bk-tab-panel>
        <bk-tab-panel tab="tab-2"> <button class="bk-button">Test</button> </bk-tab-panel>
        <bk-tab-panel tab="tab-3">I am very long tab 2 content</bk-tab-panel>
        <bk-tab-panel tab="tab-4">User content</bk-tab-panel>
    </bk-tabs> `
```

&nbsp;

<!-- Auto Generated Below -->


## Properties

| Property   | Attribute  | Description         | Type                                     | Default    |
| ---------- | ---------- | ------------------- | ---------------------------------------- | ---------- |
| `position` | `position` | Position of the tab | `"bottom" \| "left" \| "right" \| "top"` | `'top'`    |
| `variant`  | `variant`  | Variant of the tab  | `"border-card" \| "card" \| "simple"`    | `'simple'` |


## Events

| Event      | Description                                                      | Type                  |
| ---------- | ---------------------------------------------------------------- | --------------------- |
| `bkSelect` | This event will fire on selection of a tab with tab id as detail | `CustomEvent<string>` |


----------------------------------------------


