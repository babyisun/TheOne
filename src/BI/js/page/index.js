import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link} from 'react-router-dom';
// import {Router, Route, IndexRedirect, hashHistory, Link} from 'react-router';
import "../../css/page/index.scss";

class Home extends React.Component {
    render() {
        return (
            <div className="main home">
                <h1 className="home-title">ReactEasyUI</h1>
                <p className="home-desc">ReactEasyUI 是一个基于 React 的常用组件库，封装了日期、列表、图表等常见使用场景，由<Link to="about">易车前端团队</Link>倾力打造。</p>
                <div className="home-btns">
                    <Link className="btn btn-start" to="getting-started">快速开始</Link>
                    <a
                        className="btn btn-github"
                        href="https://github.com/reacteasyui/ReactEasyUI"
                        target="_blank">GitHub</a>
                </div>
            </div>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
), document.getElementById('app'));