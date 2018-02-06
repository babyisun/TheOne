import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Link} from 'react-router-dom';
import "./lib/lib.js"
// import {Router, Route, IndexRedirect, hashHistory, Link} from 'react-router';
import "../css/page/index.scss";
import Header from "./component/Header.js";
import Editor from "./component/Editor.js";
import Explorer from "./component/Explorer.js";
import Pad from "./component/Pad.js";
import "./component/two2.js";
// import "./plugin/gridstack.jQueryUI.js"
// import "./plugin/gridstack.js"


class Home extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Editor/>
                <Explorer/>
                <Pad/>
            </div>
        );
    }
}

ReactDOM.render((
    <BrowserRouter>
        <Home/>
    </BrowserRouter>
), document.getElementById('app'));