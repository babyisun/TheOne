import React from 'react';
import {Link, Redirect, Route} from 'react-router-dom';
import "../../css/component/main.scss";

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div id="grid" className="grid-stack grid-stack-12">
                <h3>一张报表，从心开始</h3>
            </div>
        );
    }

    componentDidMount() {
        console.info("componentDidMount:DOM已经加载完毕");
        var options = {
            width: 12,
            //height: 1,
            float: false,
            //removable: '.trash', removeTimeout: 100,
            acceptWidgets: '.grid-stack-item'
        };
        $('#grid').gridstack(_.defaults({
            float: true
        }, options));
    }
}