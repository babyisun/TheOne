import React from 'react';

export default class Pie1 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                
            <div ref="chart" className="chart">
                pie
            </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.chart);
        let myChart = echarts.init(this.refs.chart);
        let colors = ['#1c82c6', '#54ccb5', '#85d6c7', '#a9d6f9', '#1bb293', '#fff', '#333', '#ebebeb', '#999'];
        let option = {
            color: colors,
            backgroundColor: colors[5],
            title: {
                text: '双臂扣用户数据圆饼图',
                padding: 20,
                borderColor: colors[7],
                borderWidth: 1,
                textStyle: {
                    color: colors[6],
                    fontWeight: 'normal',
                    fontSize: 16,

                }
            },
            legend: {
                orient: 'vertical',
                itemWidth: 20,
                itemHeight: 20,
                itemSize: '',
                top: '45%',
                right: 20,
                formatter: '{name}',
                textStyle: {
                    color: colors[8],
                    fontSize: 14,
                },
                data: [
                    {
                        name: '某某区县2016年数据综合',
                        icon: 'roundRect',
                    }, {
                        name: '某某区县2015年数据',
                        icon: 'roundRect',
                    },
                    {
                        name: '我也不知道这里写什么',
                        icon: 'roundRect',
                    },
                    {
                        name: '反正就描述一下模块吧',
                        icon: 'roundRect',
                    },
                    {
                        name: '就这个样式',
                        icon: 'roundRect',
                    }
                ],
                calculable: true,
            },
            series: [
                {
                    type: 'pie',
                    left: 20,
                    top: 10,
                    name: '数据展示',
                    avoidLabelOverlap: false,
                    radius: ['40%', '60%'],
                    center: ['35%', '60%'],
                    label: {
                        normal: {
                            show: false,
                            position: 'center',
                        },
                        emphasis: {
                            show: true,
                            fontSize: 18,
                            color: '#333',
                            fontWeight: 'bold'
                        },
                    },

                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 356,
                            name: '某某区县2016年数据综合',
                            itemStyle: {
                                color: colors[0]
                            }
                        },
                        {
                            value: 310,
                            name: '某某区县2015年数据',
                            itemStyle: {
                                color: colors[1]
                            }
                        },
                        {
                            value: 234,
                            name: '我也不知道这里写什么',
                            itemStyle: {
                                color: colors[2]
                            }
                        },
                        {
                            value: 135,
                            name: '反正就描述一下模块吧',
                            itemStyle: {
                                color: colors[3]
                            }
                        },
                        {
                            value: 235,
                            name: '就这个样式',
                            itemStyle: {
                                color: colors[4]
                            }
                        },
                    ]
                }
            ],
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br />{b}:{c}({d}%)'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: colors[5]
            }
        };
        myChart.setOption(option);
    }
}