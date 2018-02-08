import React from 'react';
export default class Pad extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container-fluid pad">
                <div className="row">
                    <div className="col-md-12">
                        <div className="grid-stack grid-stack-12" id="grid2"></div>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        console.info("componentDidMount:DOM已经加载完毕");
        $(function () {
    var options = {
        width: 12,
        float: false,
        removable: '.trash',
        removeTimeout: 100,
        acceptWidgets: '.grid-stack-item'
    };
    $('#grid2').gridstack(_.defaults({
        float: true
    }, options));

    var items = [{
            x: 0,
            y: 0,
            width: 2,
            height: 2
        // },
        // {
        //     x: 3,
        //     y: 1,
        //     width: 1,
        //     height: 2
        // },
        // {
        //     x: 4,
        //     y: 1,
        //     width: 1,
        //     height: 1
        // },
        // {
        //     x: 2,
        //     y: 3,
        //     width: 3,
        //     height: 1
        // },
        // {
        //     x: 2,
        //     y: 5,
        //     width: 1,
        //     height: 1
        }
    ];

    //initial gridstacks in the pat
    $('.grid-stack').each(function () {
        var grid = $(this).data('gridstack');

        _.each(items, function (node) {
            grid.addWidget($('<div><div class="grid-stack-item-content" /></div>'),
                node.x, node.y, node.width, node.height);
        }, this);
    });

    $('.bar-right-line .grid-stack-item').draggable({
        helper: "clone",
        revert: 'invalid',
        handle: '.grid-stack-item-content',
        scroll: false,
        appendTo: 'body'
    });

    $('.container-fluid').on("click", ".grid-stack-item-content", function () {
        var distance = ($(this).offset().top) - ($(this).parents('.grid-stack').offset().top);
        if (distance < 42) {
            var _left = Math.round($(this).offset().left + 1),
                _top = Math.round($(this).offset().top + $(this)[0].offsetHeight);
        } else {
            var _left = Math.round($(this).offset().left + 1),
                _top = Math.round($(this).offset().top - 42);
        }
        var _editor = $('.grid-stack-control')

        if (_editor.length == 0) {
            $('.container-fluid').append(
                '<div class="grid-stack-control" style="display: block; left: ' + _left +
                'px; top: ' + _top + 'px;">' +
                '<div class="grid-stack-control-title"><span>yourTitle<span></div>' +
                '<div class="grid-stack-control-bar">' +
                '<span class="iconfont icon-infomation" /><span class="iconfont icon-infomation" /><span class="iconfont icon-infomation" /><span class="split" /><span class="state">State: X</span><span class="split" /><span class="toll"><span class="iconfont icon-title selected" /><span class="iconfont icon-down" /><span class="iconfont icon-table select select-hide" /><span class="iconfont icon-line-chart select select-hide" /><span class="iconfont icon-bar-chart select select-hide" /></span>' +
                '</div>' +
                '</div>'
            );
        } else if (_editor.css('display') == 'block' && _editor.css('left') == (_left + 'px') &&
            _editor.css('top') == (_top + 'px')) {
            _editor.css('display', 'none');
        } else {
            _editor.css('display', 'block');
        }
        _editor.css('left', _left + 'px');
        _editor.css('top', _top + 'px');

    });
    $('.container-fluid').on({
        mousedown: function () {
            var _editor = $('.grid-stack-control');
            $(document).on('mousemove.drag', function (e) {
                _editor.css('display', 'none');
            });
        },
        mouseup: function () {
            $(document).off('mousemove.drag');
        }
    })

    $('.container-fluid').on("click", ".toll", function () {
        var _select = $(this).children('.select');
        if (_select.hasClass('select-hide')) {
            _select.removeClass('select-hide');
        } else {
            _select.addClass('select-hide');
        }
    });

    $(document).click(function (e) {
        var _editor = $('.grid-stack-control');
        var a = $(e.target).closest(".grid-stack-item-content").length,
            b = $(e.target).parents(".grid-stack-control").length;
        if (!a && !b) {
            _editor.css('display', 'none');
        }
    });

});
        
    }
}