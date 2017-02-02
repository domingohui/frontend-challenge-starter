const path = require('path');
const webpack = require('webpack');

module.exports=
{
    entry: './src/index.js',
    module: {
        loaders: [
            {
                test: /\.js(x)?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, './src'),
                    path.resolve(__dirname, './src/components'),
                ],
                exclude: /node_modules/,
                query: {
                    presets: ["es2015", "react"]
                }
            },
            {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            },
            {
                test:/\.css$/,
                loaders: "style-loader!css-loader",
                include: __dirname + 'src/assets'
            },
            {
                test: /\.scss$/,
                loaders: ["style-loader", "css-loader", "sass-loader"]
            },
        ]
    },
    output: {
        filename: 'bundle.js',
        path: __dirname + '/static/build/',
        publicPath: "/static/"
    },
    resolve: {
        extensions: [".css", ".js", ".jsx"]
    }
};
