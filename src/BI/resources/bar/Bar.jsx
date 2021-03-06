import React from 'react';

export default class Bar extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div ref="chart" className="chart">
                Bar
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.chart);
        let myChart = echarts.init(this.refs.chart);
        let colors = ['#5275f7', '#d3d3d3', '#fff', '#b1b1b1', '#f5f5f5'];
        let dataAll = [
            ['27-09', '28-09', '29-09', '30-09', '01-10', '02-10', '03-10', '04-10', '05-10', '06-10', '07-10', '08-10', '09-10', '10-10', '11-10', '12-10'],
            [85, 130, 62, 150, 113, 120, 83, 105, 63, 78, 140, 115, 105, 85, 75, 62]
        ]
        let option = {
            color: colors,
            textStyle: {
                color: colors[3]
            },
            backgroundColor: colors[2],
            tooltip: {
                formatter: "{b},Thursday,sessions：{c}"
            },
            xAxis: {
                type: 'category',
                data: dataAll[0],
                axisLine: {
                    lineStyle: {
                        color: colors[4]
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: colors[4]

                    }
                },
                color: colors[3]
            },
            yAxis: {
                type: 'value',
                min: 0,
                max: 200,
                interval: 25,
                axisLine: {
                    lineStyle: {
                        color: colors[4]
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: colors[4]
                    }
                },

            },
            series: [{
                data: dataAll[1],
                type: 'bar',
                barWidth: '60%',
                itemStyle: {
                    color: function (parmas) {
                        var arr = [1, 2, 8, 9, 15];
                        if (arr.indexOf(parmas.dataIndex) == -1) {
                            return colors[0]
                        } else {
                            return colors[1]
                        }
                    },
                    opacity: 1
                },
            }]
        };
        myChart.setOption(option);
    }
}