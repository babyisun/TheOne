import React from 'react';

export default class Pie3 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>   
            <div ref="chart" className="chart">
                pie3
            </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.chart);
        let myChart = echarts.init(this.refs.chart);
        let colors = ['#506ac9', '#e6e6e6', '#fff', '#e1e1e1', '#999'];
        let option = {
            color: colors,
            backgroundColor: colors[2],
            legend: {
                orient: 'vertical',
                top: '30%',
                right: '20',
                itemWidth: 10,
                itemHeight: 10,
                data:[
                    { name: 'Convered users', icon: 'circle' },
                    { name: 'Not convered', icon: 'circle' },
                ],
                formatter: function (name) {
                    return '543'+ ' - ' + name
                },
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a}",
            },
            series: [
                {
                    type: 'pie',
                    radius: ['62%', '65%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    selectedMode: 'single',
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 543,
                            name: 'Convered users',
                            label: {
                                normal: {
                                    show: true,
                                    position: 'center',
                                    formatter: function (parmas) {
                                        var content = parmas.percent;
                                        return content + '%';
                                    },
                                    fontSize: 30,
                                    color: colors[4]
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        formatter: function (parmas) {
                                            var content = parmas.percent;
                                            return content + '%';
                                        },
                                        fontSize: '30',
                                        fontWeight: 'bold',

                                    }
                                }
                            }
                        },
                        {
                            value: 130,
                            name: 'Not convered',
                            label: {
                                normal: {
                                    show: false,
                                    position: 'center',
                                    formatter: function (parmas) {
                                        var content = parmas.percent;
                                        return content + '%';
                                    },
                                },
                                emphasis: {
                                    show: true,
                                    textStyle: {
                                        fontSize: '30',
                                        fontWeight: 'bold',

                                    }
                                }
                            }


                        },
                    ]
                }

            ]
        };
        myChart.setOption(option);
    }
}