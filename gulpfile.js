/**
 * Created by North on 16/3/22.
 * Last modified by north on 16/3/26
 */
'use strict';

var gulp = require('gulp'),
    concat = require('gulp-concat'), //组合文件
    // rename = require("gulp-rename"), //命名工具 sass = require('gulp-sass'), //编译sass
    // minifyCss = require('gulp-minify-css'), // css文件压缩
    uglify = require('gulp-uglify'); // js压缩
// replace = require('gulp-replace'); // 字符替换 runSequence =
// require('gulp-run-sequence'), // 按队列执行任务 通配符
var character = "**/*.*";
var sourcemap = "**/*.map";
var jsAndcss = "**/*.{js,css}";
//开发版路径
var src = {};
src.root = "common/";
//src.file = src.root + "js/**/*.{js,jsx}"; 编译版路径
var build = {};
build.root = "lib/";
//build.js = build.root + "lib.js"; 压缩配置
var uglify_config = {
    mangle: {
        except: ['define', 'require', 'module', 'exports']
    }
    //, compress: false
};
// sass包含路径 var sassIncludePaths = {includePaths:
// [require("bourbon").includePaths]};

/*
 * 构建js底层类库
 * [需要手动执行]
 */
gulp.task('lib', function () {
    gulp
        .src([
        src.root + 'jquery-3.3.1.min.js',
        src.root + 'bootstrap-3.3.7/js/bootstrap.min.js',
        src.root + 'jquery-ui-1.12.1/jquery-ui.min.js',
        src.root + 'jsfunction/jsfunction.min.js'
    ])
        .pipe(concat("lib.js"))
        //.pipe(uglify(uglify_config))
        .pipe(gulp.dest(build.root))
    console.log("js类库构建完毕");
});

// 默认任务
gulp.task('default', ['lib']);