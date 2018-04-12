/**
 * 数字滚动显示
 * dep jsfunction.js
 */
$.fn.changeNumber = function (options) {
    var defaults = {
            count: 10,  //增长、减少次数
            minStep: 1, //最小步长
            step: 0,    //步长
            fixedNum: 2 //保留小数点位数
        },
        opts = $.extend({},defaults, options),
        seconds = 1000 / opts.count,
        i = 0,
        _self = this;
    this.flag = null; //timeout flag
    if (!_self.length) return;
    opts.startNumber = "" + opts.startNumber || +_self.html().replace(/,/g, '');
    //保证如果是0也写入页面
    this.html(('' + opts.startNumber).formatNumber());
    if (opts.endNumber == opts.startNumber)
        return;
    //计算步长
    if (Math.abs(((opts.endNumber - opts.startNumber) / opts.count)).toFixed(opts.fixedNum) < opts.minStep) {
        if (opts.endNumber >= opts.startNumber) {
            opts.step = +opts.minStep;
        } else {
            opts.step = -opts.minStep;
        }
    } else {
        opts.step = +((opts.endNumber - opts.startNumber) / opts.count).toFixed(opts.fixedNum);
    }
    drawNumber();
    function drawNumber() {
        if (i < opts.count) {
            if (!opts.fixedNum) {
                opts.startNumber = +opts.startNumber + opts.step;
            }
            else {
                opts.startNumber = +(parseFloat(opts.startNumber + opts.step).toFixed(opts.fixedNum));
            }
            if (i == opts.count - 1 || (opts.step > 0 && opts.startNumber >= opts.endNumber) || (opts.step < 0 && opts.startNumber <= opts.endNumber)) {
                opts.startNumber = opts.endNumber;
                _self.html(('' + opts.startNumber).formatNumber());
                clearTimeout(opts.flag);
            } else {
                i++;
                _self.html(('' + opts.startNumber).formatNumber());
                this.flag = setTimeout(drawNumber, seconds);
            }
            // console.log(opts.startNumber);
        }
    }
}
/**
 * 提示框
 * dep
 @class $.alert
 @extends bootstrap.js & bootstrap.css
 @param msg {String} 提示文字
 @param [delay] {Number} 多长时间之后关闭，单位：ms
 @param [callback] {Function} 回调函数
 @return 返回Alert
 */
$.alert = function (msg, delay, callback) {
    var _alert = '<div role="alert" class="alert alert-info alert-dismissable">'
            + '<button type="button"  class="close" aria-hidden="true" tabindex="-1"><span>×</span></button><span>'
            + msg
            + '</span><button type="button" class="close sr-only"></button></div>',
        $alert = $(".alert");
    if ($alert.length)
        $alert.remove();
    $("body").append(_alert);
    //插入后获取对象
    $alert = $(".alert");
    $alert.on("click", ".close", function () {
        $alert.alert("close");
        console.log(callback);
        if (callback)
            callback();
    });
    //默认俩秒后关闭
    setTimeout(function () {
        if (callback)
            callback();
    }, delay || 2000)
}