import React from 'react';
import Pie from "./pie/Pie.jsx";
import Pie2 from "./pie2/Pie.jsx";
import Pie3 from "./pie3/Pie.jsx";
import Line from "./line/Line.jsx";
import Line2 from "./line2/Line.jsx";
import Bar from "./bar/Bar.jsx";

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="Demo">
                <div className="col"><Pie /></div>
                <div className="col"><Pie2 /></div>
                <div className="col"><Pie3 /></div>
                <div className="col"><Line /></div>
                <div className="col"><Line2 /></div>
                <div className="col"><Bar /></div>
            </div>
        )
    }
}