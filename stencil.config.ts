import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'
import { inlineSvg } from 'stencil-inline-svg'

export const config: Config = {
    namespace: 'brick-components',
    taskQueue: 'async',
    buildEs5: false,
    bundles: [
        {
            components: ['bk-tabs', 'bk-tab-header', 'bk-tab-panel'],
        },
        {
            components: ['bk-collapse', 'bk-collapse-group'],
        },
    ],
    plugins: [
        sass({
            injectGlobalPaths: [
                './src/theme/base/mixins/function.scss',
                './src/theme/base/mixins/utils.scss',
                './src/theme/base/mixins/mixins.scss',
                './src/theme/variables/index.scss',
                './src/theme/base/common/var.scss',
            ],
        }),
        inlineSvg(),
    ],
    globalStyle: './src/theme/index.scss',
    outputTargets: [
        reactOutputTarget({
            componentCorePackage: '@avrghz/brick-components',
            proxiesFile: './react/src/index.ts',
        }),
        {
            type: 'dist',
            esmLoaderPath: '../loader',
        },
        {
            type: 'docs-readme',
            footer: '',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
    ],
}
