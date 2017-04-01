var webpack = require('webpack');

module.exports = {
    entry: './app/index/index.js',
    output: {
        path: __dirname,
        filename: './dist/index/index.js'
    },
    module: {
        loaders: [
            {test:   /\.css$/,loader: "style-loader!css-loader!postcss-loader" },
            {test: /\.scss$/, loader: 'style-loader!css-loader!postcss-loader!sass-loader'}
         ]
    },
    plugins: [
        new webpack.BannerPlugin('This file is created by which guan 2017/4/1')
    ]
}