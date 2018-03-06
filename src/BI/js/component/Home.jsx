import React from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import {observer} from "mobx-react";
import {conponentsStore} from "../store/ConponentsStore";
import "../plugin/gotop";
import Chart from "./Chart.jsx";
import "../../css/component/main.scss";
import Components from "../core/components";
import Card from "../../resources/base/Card.jsx";
import {Gird} from "../core/util";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.grid = null;
        this.state = {
            components: [
                {
                    name: "Card"
                }, {
                    name: "Line"
                }, {
                    name: "Pie"
                }
            ]
        }
    }
    render() {
        return (
            <div id="grid" className="grid grid-stack grid-stack-12">
                <h3>一张报表，从心开始</h3>
                {/* this
                    .state
                    .components
                    .map((item, i) => {
                        //console.log(item + index);
                        return <div key={i}>{Components.getComponent(item.name, item.options)}</div>
                    }) */}
                {/* <Chart
                    option={{
                    xAxis: {
                        type: 'category',
                        data: [
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat',
                            'Sun'
                        ]
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            data: [
                                820,
                                932,
                                901,
                                934,
                                1290,
                                1330,
                                1320
                            ],
                            type: 'line'
                        }
                    ]
                }}/> */}
            </div>
        );
    }

    componentDidMount() {
        let _this = this;
        var options = {
            width: 12,
            float: false,
            //removable: '.trash', removeTimeout: 100,
            acceptWidgets: '.grid-stack-item'
        };
        let grid = $('#grid').gridstack(_.defaults({
            float: true
        }, options));
        grid.on('change', function (e, items) {
            console.log(items[0].el[0].getAttribute("component"));
            /* console.log(e.target);
            console.log(items);
            */
            // let components = _this.state.components; components.add({name: "Card"});
            // _this.setState({components: components});

            var serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                el = $(el);
                var node = el.data('_gridstack_node');
                return node; //{x: node.x, y: node.y, width: node.width, height: node.height};
            }, this);
            let $card = $('.card');
            $card.contextPopup({
                items: [
                    {
                        label: '数据源',
                        iconClass: "icon-data",
                        action: () => {
                            alert(1);
                        }
                    }
                ]
            });
            //console.log(serializedData);
        }).on('gsresizestop', (e, item) => {
            var grid = this;
            var element = e.target;
            let _item = Gird.getResizedItem(item);
            let _thisChart = echarts.getInstanceByDom(_item);
            _thisChart.resize();
        }).on('added', (e, item) => {
            // console.log(e.target); console.log(item);
            let _item = Gird.getAddedItem(item);
            //return;
            let myChart = echarts.init(_item);
            let data = {
                xAxis: {
                    type: 'category',
                    data: [
                        'Mon',
                        'Tue',
                        'Wed',
                        'Thu',
                        'Fri',
                        'Sat',
                        'Sun'
                    ]
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            820,
                            932,
                            901,
                            934,
                            1290,
                            1330,
                            1320
                        ],
                        type: 'line'
                    }
                ]
            };
            myChart.setOption(data);
        });

        // _this.grid = grid.data("gridstack"); _this.grid.addWidget('<div><div
        // class="grid-stack-item-content">123abc</div></div>',0, 0, Math.floor(1 + 3 *
        // Math.random()), Math.floor(1 + 3 * Math.random()));
        // console.log(_this.grid.addWidget);
    }
}