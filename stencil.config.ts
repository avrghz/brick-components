import { Config } from '@stencil/core'
import { sass } from '@stencil/sass'
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
    namespace: 'brick-components',
    taskQueue: 'async',
    buildEs5: false,
    plugins: [
        sass({
            injectGlobalPaths: [
                './src/theme/base/common/var.scss',
                './src/theme/base/mixins/mixins.scss',
                './src/theme/base/mixins/utils.scss',
                './src/theme/base/mixins/function.scss',
            ],
        }),
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
