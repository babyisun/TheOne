import React from 'react';
import "./card.scss";

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page:[{
                x:1,
                y:1,
                width:1,
                height:1
            }],
            data: [{
                title: "双臂扣用户数量",
                unit: "单位：元",
                number: "3,333,222",
                subtitle: "净值",
                rate: "88%"
            }, {
                title: "双臂扣用户数量1",
                unit: "单位：元",
                number: "3,333,222",
                subtitle: "净值",
                rate: "88%"
            }, {
                title: "双臂扣用户数量1",
                unit: "单位：元",
                number: "3,333,222",
                subtitle: "净值",
                rate: "88%"
            }, {
                title: "双臂扣用户数量1",
                unit: "单位：元",
                number: "3,333,222",
                subtitle: "净值",
                rate: "88%"
            }]
        }
    }
    render() {
        return (<div className="row">
            {
                //console.log(1);
                this.state.data.map((item, i) => {
                    return (
                        <div key={i} className="col-3" data-gs-height="2">
                            <div className="title">
                                <h3>{item.title}</h3>
                                <span className="btn bg-primary">单位：元</span>
                            </div>
                            <div className="number">40886,200</div>
                            <p>
                                净现值
                        <span className="fright">98%</span>
                            </p>
                        </div>)
                })
            }
        </div>
        )
    }
}