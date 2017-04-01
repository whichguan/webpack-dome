var webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    module: {
        loaders: [
            {test:   /\.css$/,loader: "style-loader!css-loader!postcss-loader" },
            {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}
         ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by which 222')
    ]
}