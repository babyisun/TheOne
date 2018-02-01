'use strict';
const fs = require("fs"),
    path = require("path"),
    _config = require('./config'),
    //_alias = require('../ReactUI/alias'),
    currentProject = "/" + _config.Current,
    js = currentProject + "/js/page/",
    css = currentProject + "/css/page/";
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

//var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
//var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
// var CommonsChunkPlugin = require("CommonsChunkPlugin");
// var UglifyJsPlugin = require("UglifyJsPlugin");
// var NoErrorsPlugin = require("webpack/lib/NoErrorsPlugin");
// var IgnorePlugin = require("IgnorePlugin");

var config = {
    //devtool: "source-map",
    entry: getEntry(),
    resolve: {
        //alias: _alias,
        //extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "dev" + js), //文件输出目录
        //publicPath: "build" + js,
        filename: "[name].js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "../../page/index.html",
            template: __dirname + "/src" + currentProject + "/page/index.tmpl.html",
            hash: true,
            // inject: true,
            // cache: true,
            // time: +new Date()
        }),
        new ExtractTextPlugin({
            filename:"../../css/[name].css"
        }),
        //new IgnorePlugin(/\.\/jquery/),
        // new CommonsChunkPlugin({
        //     filename: "common.js",
        //     name: "common"
        // })
        //new NoErrorsPlugin()
        //		new CommonsChunkPlugin({
        //			name: lib,
        //			minChunks: Infinity
        //		})
        //		new UglifyJsPlugin({
        //			compress: {
        //				warnings: false
        //			}
        //		})
    ],
    //watch:true,
    //debug:true,
    module : {
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
                loader: `url-loader?limit=500&name=/dev${css}[name].[ext]`
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