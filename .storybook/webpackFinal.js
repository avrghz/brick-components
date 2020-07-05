const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = async (config) => {
    config.output.path = path.resolve(__dirname, '..', 'stories')

    config.plugins.push(
        new CopyPlugin([
            {
                from: path.resolve(__dirname, '..', 'dist'),
                to: path.resolve(__dirname, '..', 'stories', 'components'),
            },
        ])
    )

    config.module.rules.push({
        test: /\.(ts|tsx)$/,
        use: [
            {
                loader: require.resolve('ts-loader'),
            },
        ],
    })
    config.resolve.extensions.push('.ts', '.tsx')

    return config
}
