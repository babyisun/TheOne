'use strict';
const fs = require("fs"),
    path = require("path"),
    _config = require('./config'),
    //_alias = require('../ReactUI/alias'),
    currentProject = "/" + _config.Current,
    js = currentProject + "/js/";
const getEntry = function () {
    var jsPath = path.resolve("src" + js);
    //console.log(jsPath);
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {},
        all = [];
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        var _path = '';
        if (matchs) {
            _path = path.resolve("src" + js, item);
            files[matchs[1]] = _path;
            all.push(_path);
        }
    });
    //files["common"] = lib;
    return files;
}
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin");
const UglifyJsPlugin = require("webpack/lib/optimize/UglifyJsPlugin");
// var NoErrorsPlugin =require("webpack/lib/NoErrorsPlugin"); var IgnorePlugin
// =require("IgnorePlugin");

var config = {
    //devtool: "source-map",
    entry: getEntry(),
    resolve: {
        //alias: _alias, extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "build" + js), //文件输出目录
        //publicPath: "build" + js,
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: __dirname + "/src" + currentProject + "/page/index.tmpl.html",
            hash: true,
            // inject: true, cache: true, time: +new Date()
        }),
        new ExtractTextPlugin({filename: "../css/[name].css"}),
        // new IgnorePlugin(/\.\/jquery/), new NoErrorsPlugin()
        new CommonsChunkPlugin("common.js"),
        new UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],
    //watch:true, debug:true,
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            'es2015', 'react'
                        ], //'stage-1',
                        // plugins: ["transform-es3-member-expression-literals",
                        // "transform-es3-property-literals"], compact: false
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: `url-loader?limit=500&name=../images/[name].[ext]`
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

//console.log(config);
module.exports = config;