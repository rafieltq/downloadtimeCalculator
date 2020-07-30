var HtmlWebpackPlugin = require('html-webpack-plugin');

var path = require('path');

module.exports={
    entry: './src/js/calc.js',
    output:{
        path: path.resolve(__dirname, './build'),
        filename:'bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html'
    })
],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};