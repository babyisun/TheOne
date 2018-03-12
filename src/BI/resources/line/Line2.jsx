import React from 'react';

export default class Line2 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div ref="chart" className="chart">
                line2
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.chart);
        let myChart = echarts.init(this.refs.chart);
        let colors = ['#b1b1b1', '#35d050', '#fff', '#e9e9e9'];
        let option = {
            color: colors,
            title: {
                text: 'View depth',
                left: '50',
                top: '30',
                textStyle: {
                    color: colors[0],
                    fontWeight: 'normal',

                }
            },
            textStyle: {
                color: colors[0]
            },
            backgroundColor: colors[2],
            tooltip: {
                show: true,
                trigger: 'axis',
                backgroundColor: colors[1],
                padding: [5, 10],
                textStyle: {
                    fontSize: 14,
                    fontWeight: 'normal'
                },
                formatter: '{c} {a}'
            },
            xAxis: {
                type: 'category',
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                },
                boundaryGap: false,
            },
            yAxis: {
                show: false,
                type: 'value',
                data: [0, 10, 20, 30, 40, 50],
                min: 0,
                max: 50,
                boundaryGap: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                splitLine: {
                    lineStyle: {
                        color: colors[3]
                    }
                }

            },
            series: [{
                name: 'Users',
                data: [12, 28, 29, 37, 26, 20, 26, 24, 24.5, 30, 29, 27, 33],
                type: 'line',
                areaStyle: {
                    opacity: 0.3,
                },
                color: colors[1],
                symbol: 'circle',
            }],
            axisPointer: {
                show: true,
                type: 'line',
                axis: 'x',
                trigger: 'axis',
                label: {
                    show: true
                },
                lineStyle: {
                    color: colors[3],
                    width: 2,
                },
            },
            legend: {
                show: false
            }
        };
        myChart.setOption(option);
    }
}