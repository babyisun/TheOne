import React from 'react';
import {BrowserRouter, Link, Redirect, Route} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="banner">
                <span className="iconfont icon-pie-chart left"></span>
                <span className="left">BI 系统</span>
                <span className="button left">当前项目</span>
                <span className="button left">全部项目</span>
                <span className="button left">皮肤</span>
                <span className="button right">保存</span>
                <span className="button right">退出</span>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/pad">Pad</Link>
                </nav>
            </div>
        );
    }
}