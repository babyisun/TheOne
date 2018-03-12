import React from 'react';

export default class Line1 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div ref="chart" className="chart">
                line
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.chart);
        let myChart = echarts.init(this.refs.chart);
        let colors = ['#b1b1b1', '#fb8a02', '#fff', '#e9e9e9'];
        let option = {
            color: colors,
            title: {
                text: 'New Users',
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
                name: ' wode ',
                trigger: 'axis',
                // axisPointer:{
                //     type:'shadow',
                //     axis:'x'
                // },
                backgroundColor: 'rgba(251,138,2,1)',
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
                }
            },
            yAxis: {
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
                color: colors[1]
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
                left: 50,
                bottom: 10,
                itemWidth: 20,
                itemHeight: 20,
                formatter: 'New Users',
                //   data:['蒸发量','降水量','平均温度']

            }
        };
        myChart.setOption(option);
    }
}