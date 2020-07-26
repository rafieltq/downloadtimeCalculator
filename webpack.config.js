const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/js/calc.js',
    output:{
        path: __dirname + '/build',
        filename: 'Bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:[
                    {loader: 'style-loader'},
                    {loader: 'css-loader'}
                ]
            }
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}