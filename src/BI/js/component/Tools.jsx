import React from 'react';
import Card from "../../resources/base/card.jsx";
import Chart from "./Chart.jsx";


export default class Tools extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="editor bar-right">
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-funnel"></use>
                            </svg>
                            <div className="panel">
                            <Chart
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
                }}/>
                            </div>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        component="card"
                        data-gs-width="12"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-property"></use>
                            </svg>
                            <div className="panel">
                                <Card/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-line-chart"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-bar-chart"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-pie-chart"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-scatter"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-map"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-data"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon grid-stack-item ui-draggable" aria-hidden="true">
                                <use xlinkHref="#icon-title"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-text"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-number"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-string"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-checkbox"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-radiobutton"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-filter"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-datepicker"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-button"></use>
                            </svg>
                        </div>
                    </div>
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="2"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-table"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="bar-right-line">
                    <div
                        className="grid-stack-item icon-block"
                        data-gs-width="1"
                        data-gs-height="2">
                        <div className="grid-stack-item-content">
                            <svg className="icon" aria-hidden="true">
                                <use xlinkHref="#icon-dropdownbox"></use>
                            </svg>
                        </div>
                    </div>
                </div>
                {/* DELETE
             <div className="col-md-9">
                <div className="trash">
                </div>
            </div> */}
            </div>
        )
    }

    componentDidMount() {
        $('.bar-right-line .grid-stack-item').draggable({helper: "clone", revert: 'invalid', handle: '.grid-stack-item-content', scroll: false, appendTo: 'body'});
    }
}