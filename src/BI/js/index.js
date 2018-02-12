import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Link,
    Redirect,
    Route,
    HashRouter,
    history,
    Switch
} from 'react-router-dom';
//import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import "../css/page/index.scss";
import "../css/font/iconfont.css";
import Login from "./component/Login.jsx";
import Header from "./component/Header.jsx";
import Sider from "./component/Sider.jsx";
import Home from "./component/Home.jsx";
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

    componentDidMount() {}

}

ReactDOM.render((
    <HashRouter history={history}>
        <Switch>
            <Route path="/login" component={Login}/>
            <App>
                <Route exact path="/" component={Home}/>
                <Route path="/pad/:id" component={Pad}/>
            </App>
        </Switch>
    </HashRouter>
), document.getElementById('app'));