import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Link,
    Redirect,
    Route,
    HashRouter,
    history
} from 'react-router-dom';
//import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import "../css/page/index.scss";
import "../css/font/iconfont.css";
import Login from "./component/Login.jsx";
import Header from "./component/Header.jsx";
import Sider from "./component/Sider.jsx";
import Editor from "./component/Editor.jsx";
import Explorer from "./component/Explorer.jsx";
import Pad from "./component/Pad.jsx";

//import "./plugin/lodash.min.js";
import "./plugin/gridstack.js";
import "./plugin/gridstack.jQueryUI.js";
// import '../css/font/iconfont.js'

class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <div className="main clearfix">
                    <Sider/>
                    <div className="docs">
                        <div className="content">
                            {this.props.children}
                        </div>
                    </div>
                    <Editor/>
                </div>
                {/* <Editor/>
                <Explorer/>
                <Pad/>  */}
            </div>
        );
    }

    componentDidMount() {
        // initial position var screenH = $(window).height(),     screenW =
        // $(window).width(),     barLeft = $('.bar-left'),     barRight =
        // $('.bar-right'); barLeft.css('height', screenH - 40 + 'px');
        // barRight.css('height', screenH - 50 + 'px');

    }

}

ReactDOM.render((
    <HashRouter history={history}>
        <div>
            {/* <Redirect to={"login"}/> */}
            <Route exact path="/" component={App}/>
            <Route path="/pad" component={Pad}/>
            <Route exact path="/login" component={Login}/>
        </div>
    </HashRouter>
), document.getElementById('app'));
/* ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home}/>
        <Route path="/pad" component={Pad}/>
    </Router>,
    document.getElementById('app')
); */