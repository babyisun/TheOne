const webpack = require("webpack"),
    fs = require("fs"),
    path = require("path");

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const NoEmitOnErrorsPlugin = webpack.NoEmitOnErrorsPlugin;

var config = {
    entry: [
        "./common/jquery-3.3.1.min.js", 
        "./common/bootstrap-3.3.7/js/bootstrap.min.js", 
        "./common/jquery-ui-1.12.1/jquery-ui.js", 
        "./common/jsfunction/jsfunction.js", 
        "./common/css.js"
    ],
    /*  {
        jquery: "./common/jquery-3.3.1.min.js",
        bootstrap: "./common/bootstrap-3.3.7/js/bootstrap.min.js",
        jqueryUi: "./common/jquery-ui-1.12.1/jquery-ui.min.js",
        jsfunction: "./common/jsfunction/jsfunction.js"
    }, */
    output: {
        path: path.join(__dirname, "lib/"), //文件输出目录
        filename: "lib.js"
    },
    plugins: [
        new ExtractTextPlugin("./lib.css"),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new NoEmitOnErrorsPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: {
                    loader: "babel-loader",
                    // options: {     presets: ['es2015', 'react'] }
                },
                exclude: /node_modules/
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: `url-loader?limit=500&name=./images/[name].[ext]?[hash:8]`
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: {
                        loader: "css-loader",
                        options: {
                            minimize: true
                        }
                    }
                })
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        }, {
                            loader: "sass-loader"
                        }
                    ],
                    fallback: "style-loader"
                })
            }
        ]
    }
};

module.exports = config;