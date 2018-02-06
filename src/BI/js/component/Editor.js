import React from 'react';
import Font from '../../css/font/iconfont.js'
export default class Editor extends React.Component{
    constructor(props){
        super(props);
    }

    
    render(){
        return(
            <div className="bar-right">
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-title"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-text"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-number"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-string"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-checkbox"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-radiobutton"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-filter"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-datepicker"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-button"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-table"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-line-chart"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-bar-chart"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-pie-chart"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-scatter"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-funnel"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-property"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-map"></use></svg>
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-data"></use></svg>
                </div>
                <div className="bar-right-line">
                    <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-dropdownbox"></use></svg>
                </div>
            </div>
        )
    }
}