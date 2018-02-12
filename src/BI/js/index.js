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

/* const About = () => (
    <div>
      <h3>About</h3>
    </div>
  )

  const Home = () => (
    <div>
      <h3>Home</h3>
    </div>
  )

  const Message = ({ match }) => (
    <div>
      <h3>new messages</h3>
      <h3>{match.params.id}</h3>
    </div>
  )

  const Inbox = ({ match }) => (
    <div>
      <h2>Topics</h2>
      <Route path={`${match.url}/messages/:id`} component={Message}/>

    </div>
  )

class App1 extends React.Component {
    render() {
      return (
        <div>
          <h1>App</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/inbox">Inbox</Link></li>
          </ul>
          {this.props.children}

        </div>
      );
    }
  }

  ReactDOM.render(
    (<HashRouter>
      <App1>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/inbox" component={Inbox} />
      </App1>
    </HashRouter>),
    document.getElementById('app')
  ); */
