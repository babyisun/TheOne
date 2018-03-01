import React from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import "../plugin/gotop";
import Chart from "./Chart.jsx";
import "../../css/component/main.scss";
import Components from "../core/components";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
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
            <div id="grid" className="grid-stack grid-stack-12">
                <h3>一张报表，从心开始</h3>
                {this
                    .state
                    .components
                    .map((item, i) => {
                        //console.log(item + index);
                        return <div key={i}>{Components.getComponent(item.name, item.options)}</div>
                    })
}
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
        $('#grid').gridstack(_.defaults({
            float: true
        }, options))
            .on('change', function (event, items) {
                console.log(items);
                let components = _this.state.components;
                components.add({name: "Card"});
                _this.setState({components: components});

                var serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                    el = $(el);
                    var node = el.data('_gridstack_node');
                    return node; //{x: node.x, y: node.y, width: node.width, height: node.height};
                }, this);
                console.log(serializedData);
            })
            .on('gsresizestop', function (event, ui) {
                var grid = this;
                var element = event.target;
                //console.log(element);
            });
    }
}