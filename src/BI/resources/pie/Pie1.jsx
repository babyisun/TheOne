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
        let option = {
            backgroundColor: '#fff',
            title: {
                text: '双臂扣用户数据圆饼图',
                padding: 20,
                borderColor: '#ebebeb',
                borderWidth: 1,
                textStyle: {
                    color: '#333',
                    fontWeight: 'normal',
                    fontSize: 16
                }
            },
            legend: {
                orient: 'vertical',
                itemWidth: 30,
                itemHeight: 30,
                itemSize: '',
                top: '40%',
                right: 20,
                formatter: '{name}',
                textStyle: {
                    color: '#999',
                    fontSize: 14
                },
                data: [
                    {
                        name: '某某区县2016年数据综合',
                        icon: 'roundRect'
                    }, {
                        name: '某某区县2015年数据',
                        icon: 'roundRect'
                    }, {
                        name: '我也不知道这里写什么',
                        icon: 'roundRect'
                    }, {
                        name: '反正就描述一下模块吧',
                        icon: 'roundRect'
                    }, {
                        name: '就这个样式',
                        icon: 'roundRect'
                    }
                ],
                calculable: true
            },
            series: [
                {
                    type: 'pie',
                    left: 20,
                    top: 10,
                    name: '数据展示',
                    avoidLabelOverlap: false,
                    radius: [
                        '40%', '60%'
                    ],
                    center: [
                        '35%', '60%'
                    ],
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            fontSize: 18,
                            color: '#333',
                            fontWeight: 'bold'
                        }
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
                                color: '#1c82c6'
                            }
                        }, {
                            value: 310,
                            name: '某某区县2015年数据',
                            itemStyle: {
                                color: '#54ccb5'
                            }
                        }, {
                            value: 234,
                            name: '我也不知道这里写什么',
                            itemStyle: {
                                color: '#85d6c7'
                            }
                        }, {
                            value: 135,
                            name: '反正就描述一下模块吧',
                            itemStyle: {
                                color: '#a9d6f9'
                            }
                        }, {
                            value: 235,
                            name: '就这个样式',
                            itemStyle: {
                                color: '#1bb293'
                            }

                        }
                    ]
                }
            ],
            tooltip: {
                trigger: 'item',
                formatter: '{a}<br />{b}:{c}({d}%)'
            },
            itemStyle: {
                borderWidth: 3,
                borderColor: '#fff'
            }
        };
        myChart.setOption(option);
    }
}