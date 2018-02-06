'use strict';
const webpack = require("webpack"),
    fs = require("fs"),
    path = require("path"),
    _config = require('./config'),
    //_alias = require('../ReactUI/alias'),
    currentProject = "/" + _config.Current,
    js = currentProject + "/js/";
//lib = js + "lib/";
const getEntry = function () {
    var jsPath = path.resolve("src" + js);
    //console.log(jsPath);
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {};
    //files["lib"] = path.resolve("src" + lib, "lib.js");
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        var _path = '';
        if (matchs) {
            _path = path.resolve("src" + js, item);
            files[matchs[1]] = _path;
        }
    });
    return files;
}

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ProvidePlugin = webpack.ProvidePlugin;
const IgnorePlugin = webpack.IgnorePlugin;

var config = {
    devtool: "source-map",
    entry: getEntry(),
    resolve: {
        //alias: _alias, extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "dev" + js), //文件输出目录
        //publicPath: "build" + js,
        filename: "[name].js?[hash:8]"
    },
    plugins: [
        new IgnorePlugin(/\.\/jquery/),
        //new ProvidePlugin({$: 'jquery', jQuery: 'jquery', 'window.jQuery': 'jquery', 'window.$': 'jquery'}),
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: __dirname + "/src" + currentProject + "/page/index.tmpl.html",
            //hash: true, inject: true, cache: true, time: +new Date()
        }),
        new ExtractTextPlugin({filename: "../css/[name].css?[hash:8]"})
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
                loader: `url-loader?limit=500&name=../images/[name].[ext]?[hash:8]`
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: "css-loader"
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