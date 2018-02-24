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
            float: false,
            //removable: '.trash', removeTimeout: 100,
            acceptWidgets: '.grid-stack-item'
        };
        $('#grid').gridstack(_.defaults({
            float: true
        }, options))
            .on('change', function (event, items) {
                console.log(items);
                var serializedData = _.map($('.grid-stack > .grid-stack-item:visible'), function (el) {
                    el = $(el);
                    var node = el.data('_gridstack_node');
                    return node;//{x: node.x, y: node.y, width: node.width, height: node.height};
                }, this);
                console.log(serializedData);
            });;
    }
}