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
        let i = 0;
        let option = {
            color: colors,
            backgroundColor: colors[2],
            // tooltip: {
            //     trigger: 'item',
            //     formatter: "{a} <br/>{b}: {c} ({d}%)"
            // },
            legend: {
                orient: 'vertical',
                top: '30%',
                right: '20',
                formatter: function (name) {
                    return option.series[0].data[i++].value + ' - ' + name;
                },
                textStyle: {
                    color: colors[4]
                },
                data: [
                    {
                        name: 'Convered users',
                        icon: 'circle',
                    },
                    { name: 'Not convered', icon: 'circle' }
                ],


            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['62%', '65%'],
                    avoidLabelOverlap: false,
                    hoverAnimation: false,
                    selectedMode: 'single',
                    label: {
                        normal: {
                            show: true,
                            position: 'center',
                            formatter: function (parmas) {
                                //  return parmas.percent+'%'
                                return firstNumber()
                            },
                            fontSize: 30,
                            fontWeight: 'bold',
                        },
                        emphasis: {
                            show: true,
                            formatter: function (parmas) {

                                return parmas.percent + '%'
                            },
                            textStyle: {

                                fontSize: '30',
                                fontWeight: 'bold',

                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: [
                        {
                            value: 543,
                            name: 'Convered users',
                            // label:{
                            //     normal:{
                            //         show: true,
                            //         position: 'center',
                            //         formatter:function(parmas){
                            //             return parmas.data
                            //         },
                            //         fontSize:30,
                            //         color:colors[4]
                            //     },
                            //     emphasis: {
                            //         show: true,
                            //         textStyle: {
                            //             formatter: function (parmas) {
                            //                 // var dataLen = parmas.seriesIndex
                            //                 return parmas.seriesIndex
                            //             },
                            //             fontSize: '40',
                            //             fontWeight: 'bold',

                            //         }
                            //     }
                            // }
                        },
                        {
                            value: 130,
                            name: 'Not convered',
                            // label:{
                            //     normal:{
                            //         show: true,
                            //         position: 'center',
                            //         formatter:function(parmas){
                            //             var content = parmas.percent;
                            //             return content+'%';
                            //         },
                            //     },
                            //     emphasis: {
                            //         show: true,
                            //         textStyle: {
                            //             fontSize: '30',
                            //             fontWeight: 'bold',

                            //         }
                            //     }
                            // }


                        },
                    ]
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
        function firstNumber(){
            var dataLen = option.series[0].data[0].value;
            
            return parseFloat(dataLen/sum()*100).toFixed(2)+ '%';
        }
        myChart.setOption(option);
    }
}