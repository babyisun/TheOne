import React from 'react';
import {BrowserRouter, Link, Redirect, Route, NavLink} from 'react-router-dom';

export default class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <header className="header">
                <Link className="logo" to="/">BI 系统</Link>
                <button className="btn-menu">
                    <span className="menu-icon"></span>
                </button>
                <nav className="nav" role="navigation">
                    <ul className="navlist">
                        <li>
                            <NavLink to="getting-started" activeClassName="active">当前项目</NavLink>
                        </li>
                        <li>
                            <a href="http://www.itbbb.com/jsfunction/jsfunction.html" target="_blank">保存</a>
                        </li>
                    </ul>
                    <ul className="navlist navlist-right">
                        <li>
                            <span>欢迎，North</span>
                            <NavLink to="about" activeClassName="active">退出</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

        );
    }
}