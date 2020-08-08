/* global window */

import { configure, addParameters } from '@storybook/web-components'
import { themes } from '@storybook/theming'
import addons from '@storybook/addons'

// import customElements from '../custom-elements.json';

// setCustomElements(customElements);

addParameters({
    docs: {
        iframeHeight: '200px',
    },
    darkMode: {
        light: { ...themes.normal, appBg: 'white' },
        dark: { ...themes.dark, appBg: 'black' },
    },
})

const channel = addons.getChannel()

channel.on('DARK_MODE', (isDark) => {
    if (isDark) {
        document.querySelector('html').setAttribute('dark-mode', 'true')
    } else {
        document.querySelector('html').removeAttribute('dark-mode')
    }
})

// force full reload to not reregister web components
const req = require.context('../src', true, /\.stories\.(tsx|mdx)$/)
configure(req, module)
if (module.hot) {
    module.hot.accept(req.id, () => {
        const currentLocationHref = window.location.href
        window.history.pushState(null, null, currentLocationHref)
        window.location.reload()
    })
}
