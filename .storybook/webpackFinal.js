const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = async (config) => {
    config.output.path = path.resolve(__dirname, '..', 'stories')

    config.plugins.push(
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '..', 'www', 'build'),
                    to: path.resolve(__dirname, '..', 'stories', 'components', 'brick-components'),
                },
            ],
        })
    )

    return config
}
