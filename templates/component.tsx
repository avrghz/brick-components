import { Component, h } from '@stencil/core'

@Component({
    tag: '{{prefix}}-{{tag}}',
    shadow: true,
    styleUrl: './index.scss',
})
export class {{> folderName}} {
    render() {
        return <div>This is {{prefix}}-{{tag}}</div>
    }
}
