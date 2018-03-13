import React from 'react';

export default class Pie2 extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>   
            <div ref="chart" className="chart">
                pie2
            </div>
            </div>
        )
    }
    componentDidMount() {
        console.log(this.refs.chart);
        let myChart = echarts.init(this.refs.chart);
        let colors = ['#fb8a02', '#4fd165', '#f1392f', '#438edb', '#2da6ff', '#fff', '#b1b1b1'];
        let i=0;
        let option = {
            title: {
                text: 'Age Users',
                left: '15',
                textStyle: {
                    color: colors[6],
                    fontWeight: 'normal'
                },
                top: 15
            },
            color: colors,
            backgroundColor: colors[5],
            tooltip: {
                trigger: 'item',
                formatter: "{b}",

            },
            legend: {
                bottom: 10,
                left: 'center',
                width: '100%',
                itemWidth: 10,
                itemHeight: 10,
                data: [
                    { name: '18-24 age', icon: 'circle' },
                    { name: '25-34 age', icon: 'circle' },
                    { name: '35-44 age', icon: 'circle' },
                    { name: '45 age', icon: 'circle' },
                    { name: '46-60 age', icon: 'circle' }
                ],
                formatter: function (name) {
                    return name + '   ' + parseFloat((option.series[0].data[i++].value) / sum() * 100).toFixed(2) + '%'
                },
            },
            series: [
                {
                    type: 'pie',
                    center: ['50%', '50%'],
                    selectedMode: 'single',
                    radius: ['30%', '65%'],
                    data: [
                        { value: 119, name: '18-24 age' },
                        { value: 857, name: '25-34 age', },
                        { value: 149, name: '35-44 age' },
                        { value: 150, name: '45 age' },
                        { value: 80, name: '46-60 age' }
                    ],
                    label: {
                        normal: {
                            show: false,
                        }
                    },
                }
            ]
        };
        function sum() {
            var x = 0;
            var shu = option.series[0].data;
            for (var i = 0; i < shu.length; ++i) {
                x += shu[i].value;
            }
            return x;
        }
        myChart.setOption(option);
    }
}