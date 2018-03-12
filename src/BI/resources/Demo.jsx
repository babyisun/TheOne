import React from 'react';
import Pie from "./pie/Pie1.jsx";
import Pie2 from "./pie/Pie2.jsx";
import Pie3 from "./pie/Pie3.jsx";
import Line from "./line/Line1.jsx";
import Line2 from "./line/Line2.jsx";
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