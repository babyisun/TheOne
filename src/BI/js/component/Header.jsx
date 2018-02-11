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
                            <NavLink to="getting-started" activeClassName="active">Docs</NavLink>
                        </li>
                        <li>
                            <a href="http://www.itbbb.com/jsfunction/jsfunction.html" target="_blank">JSFunction</a>
                        </li>
                        <li>
                            <a href="https://react-bootstrap.github.io/components.html" target="_blank">Bootstrap</a>
                        </li>
                        <li>
                            <a href="https://github.com/reacteasyui/ReactEasyUI" target="_blank">GitHub</a>
                        </li>
                    </ul>
                    <ul className="navlist navlist-right">
                        <li>
                            <NavLink to="about" activeClassName="active">About Us</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>

        );
    }
}