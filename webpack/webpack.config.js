const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssestsPlugin = require('optimize-css-assets-webpack-plugin')
const { TRUE } = require('node-sass')


module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry:'./src/principal.js',
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssestsPlugin({})
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename:'estilo.css'
        })
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', //Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import,url()...
                'sass-loader',
            ]
        }, {
            test: /\.(jpeg|png|svg|gif)$/,
            use:['file-loader']
        }]
    }
}