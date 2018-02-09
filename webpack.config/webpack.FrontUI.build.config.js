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
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
// var NoErrorsPlugin =require("webpack/lib/NoErrorsPlugin");
const IgnorePlugin = webpack.IgnorePlugin;

var config = {
    //devtool: "source-map",
    entry: getEntry(),
    resolve: {
        //alias: _alias, extensions: ['', '.js', '.jsx']
    },
    output: {
        path: path.join(__dirname, "build" + js), //文件输出目录
        //publicPath: "build" + js,
        filename: "[name].js?[hash:8]"
    },
    plugins: [
        new IgnorePlugin(/\.\/jquery/),
        new HtmlWebpackPlugin({
            filename: "../index.html",
            template: __dirname + "/src" + currentProject + "/page/index.tmpl.html",
            //hash: true, inject: true, cache: true, time: +new Date()
        }),
        new ExtractTextPlugin({filename: "../css/[name].css?[hash:8]"}),
        //new NoErrorsPlugin()
        new CommonsChunkPlugin("common"),
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
                            'es2015', 'react', 'stage-1'
                        ],
                        plugins: [
                            "transform-decorators-legacy"
                        ],
                    }
                },
                exclude: /node_modules/
            }, {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: `url-loader?limit=500&name=../images/[name].[ext]?[hash:8]`
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