import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link, Redirect, Route} from 'react-router-dom';
// import {Router, Route, IndexRedirect, hashHistory, Link} from 'react-router';
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

class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Editor/>
                <Explorer/>
                {this.props.children}
                {/* <Pad/>  */}
            </div>
        );
    }

}

ReactDOM.render((
    <BrowserRouter>
        <div>
            {/* <Home/> */}
            <Route path="/" component={Home}/>
            <Route path="/pad" component={Pad}/>
        </div>
    </BrowserRouter>
), document.getElementById('app'));