var webpack = require('webpack')
var version = require('./package.json').version
var banner =
  "/**\n" +
  " * element-table-column v" + version + "\n" +
  " * https://github.com/ciwyaitd/element-table-column\n" +
  " * MIT License\n" +
  " */\n";

module.exports = {
    output: {
        filename: 'table-column.js',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin(banner, {
            raw: true
        })
    ],
}
