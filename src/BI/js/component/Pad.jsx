import React from 'react';
export default class Pad extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
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
                float: true,
                // placeholderText:"123"
            }, options));

            //init data
            var items = [{
                x: 0,
                y: 0,
                width: 2,
                height: 2
            },
            {
                x: 3,
                y: 1,
                width: 1,
                height: 2
            },
            {
                x: 4,
                y: 1,
                width: 1,
                height: 1
            },
            {
                x: 2,
                y: 3,
                width: 3,
                height: 1
            },
            {
                x: 2,
                y: 5,
                width: 1,
                height: 1
            }
            ];

            //initial gridstacks in the pad
            $('.grid-stack').each(function () {
                var grid = $(this).data('gridstack');

                _.each(items, function (node) {
                    grid.addWidget($('<div><div class="grid-stack-item-content" ><button type="button" class="close" data-dismiss="modal" aria-label="Close" ><span aria-hidden="true">&times;</span></button></div></div>'),
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

            //show and close control panel
            $('.container-fluid').on("click", ".grid-stack-item-content", function () {
                var $parent = $(this).parents('.grid-stack');
                var stateContentExample = 'State: X';
                var controlIcons = [
                    { name: 'information', code: '<span class="iconfont icon-infomation" />' },
                    { name: 'title', code: 'icon-title' },
                    { name: 'down', code: 'icon-down' },
                    { name: 'table', code: 'icon-table' },
                    { name: 'line-char', code: 'icon-line-chart' },
                    { name: 'bar-chart', code: 'icon-bar-chart' },
                    { name: 'split', code: '<span class="split" />' },
                    { name: 'state', code: '<span class="state">' + stateContentExample + '</span>' }
                ];
                if ($parent.offset() != null) {
                    var distance = ($(this).offset().top) - ($parent.offset().top);
                    if (distance < 42) {
                        var _left = Math.round($(this).offset().left + 1),
                            _top = Math.round($(this).offset().top + $(this)[0].offsetHeight);
                    } else {
                        var _left = Math.round($(this).offset().left + 1),
                            _top = Math.round($(this).offset().top - 42);
                    }
                    var $editor = $('.grid-stack-control')

                    if ($editor.length == 0) {
                        $('.container-fluid').append(
                            '<div class="grid-stack-control" style="display: block; left: ' + _left +
                            'px; top: ' + _top + 'px;">' +
                            '<div class="grid-stack-control-title"><span>yourTitle<span></div>' +
                            '<div class="grid-stack-control-bar">' +
                            '' + controlIcons[0].code + controlIcons[0].code + controlIcons[0].code + controlIcons[6].code + controlIcons[7].code + controlIcons[6].code + '<span class="toll"><span class="iconfont ' + controlIcons[1].code + ' selected" /><span class="iconfont ' + controlIcons[2].code + '" /><span class="iconfont ' + controlIcons[3].code + ' select select-hide" /><span class="iconfont ' + controlIcons[4].code + ' select select-hide" /><span class="iconfont ' + controlIcons[5].code + ' select select-hide" /></span>' +
                            '</div>' +
                            '</div>'
                        );
                    } else if ($editor.css('display') == 'block' && $editor.css('left') == (_left + 'px') &&
                        $editor.css('top') == (_top + 'px')) {
                        $editor.css('display', 'none');
                    } else {
                        $editor.css('display', 'block');
                    }
                    $editor.css('left', _left + 'px');
                    $editor.css('top', _top + 'px');
                }
            });

            //toll in control panel
            $('.container-fluid').on("click", ".toll", function () {
                var $select = $(this).children('.select');
                if ($select.hasClass('select-hide')) {
                    $select.removeClass('select-hide');
                } else {
                    $select.addClass('select-hide');
                }
            });

            //drag to close control panel
            $('.container-fluid').on({
                mousedown: function () {
                    var $editor = $('.grid-stack-control');
                    $(document).on('mousemove.drag', function (e) {
                        $editor.css('display', 'none');
                    });
                },
                mouseup: function () {
                    $(document).off('mousemove.drag');
                }
            });

            //click other place to close control panel
            $(document).click(function (e) {
                var $editor = $('.grid-stack-control');
                var a = $(e.target).closest(".grid-stack-item-content").length,
                    b = $(e.target).parents(".grid-stack-control").length;
                if (!a && !b) {
                    $editor.css('display', 'none');
                }
            });

            //close button
            $('.container-fluid').on("mouseover", ".grid-stack-item-content", function () {
                var $closeButton = $(this).children('.close');
                $closeButton.css('display', 'block');
            })
            $('.container-fluid').on("mouseout", ".grid-stack-item-content", function () {
                var $closeButton = $(this).children('.close');
                $closeButton.css('display', 'none');
            })
            $('.container-fluid').on("click", ".close", function () {
                var $editor = $('.grid-stack-control'),
                    $parents = $(this).parents('.grid-stack-item');
                $parents.remove();
                $editor.css('display', 'none');
            })

        });

    }
}