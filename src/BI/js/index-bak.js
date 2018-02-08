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
import {observer} from "mobx-react";
import {myStore} from "./store/MyStore";
//import {Router, Route, IndexRedirect, hashHistory} from 'react-router';
import "../css/page/index.scss";
import "../css/font/iconfont.css"
import Header from "./component/Header.js";
import Editor from "./component/Editor.js";
import Explorer from "./component/Explorer.js";
import Pad from "./component/Pad.js";
import "./component/two2.js";

//import "./plugin/lodash.min.js";
import "./plugin/gridstack.js";
import "./plugin/gridstack.jQueryUI.js";
// import '../css/font/iconfont.js'

@observer
class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Editor/>
                <Explorer/> {this.props.children}
                {/* <Pad/>  */}
                <div
                    style={{
                    position: "absolute",
                    top: "100px"
                }}>
                    <div className="test">{myStore.number}</div>
                    <div className="test">{myStore.getNumberLength}</div>
                    <button
                        onClick={() => {
                        myStore.setNumber(Math.random())
                    }}>Click</button>
                </div>
            </div>
        );
    }

}

ReactDOM.render((
    <HashRouter history={history}>
        <div>
            <Route path="/" component={Home}/>
            <Route path="/pad" component={Pad}/>
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