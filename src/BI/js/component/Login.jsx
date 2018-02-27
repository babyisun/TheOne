import React from 'react';
import {
    history
} from 'react-router-dom';

import { AJAX } from '../core/b';
import { CODE } from '../core/AJAX';
import "../../css/component/login.scss";


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: '',
        }
    }

    login() {
        let _this = this, _userName = $("#inputUsername").val(), _password = $("#inputPassword").val();
        _this.setState({
            error: _userName == '' ? '用户名不能为空' : (_password == '' ? '密码不能为空' : ''),
        }, () => {
            if (_this.state.error != '') return;
            AJAX.post('login', { username: _userName, password: _password }, (data) => {
                console.log(data);
                if (data.code == CODE.SUCCESS) {
                    $.cookie.set("uid", data.data);
                    _this.setState({
                        error: '',
                    }, () => {
                        _this.props.history.push("/");
                    });
                } else if (data.code == CODE.ERROR) {
                    _this.setState({
                        error: data.msg,
                    });
                }
            });
        });

    }

    render() {
        return (
            <div className="login-container">
                <div className="body-bg"></div>
                <div className="login-bg">
                    <div className="login">
                        <h1>BI</h1>
                        <p>DASHBOARD</p>
                        <p className="error">{this.state.error}</p>
                        <div className="input-container">
                            <i className="df-nissan-icon df-nissan-icon-user"></i>
                            <input type="text" id="inputUsername" className="form-control" placeholder="用户名" autoComplete="off" />
                        </div>
                        <div className="input-container">
                            <i className="df-nissan-icon df-nissan-icon-key"></i>
                            <input type="password" id="inputPassword" className="form-control" placeholder="密码" autoComplete="off" />
                        </div>
                        <button className="btn btn-danger" type="button" onClick={this.login.bind(this)}>登录
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount() {
        document.onkeydown = (e) => {
            let theEvent = e || window.event;
            let code = theEvent.keyCode || theEvent.which || theEvent.charCode;
            if (code == 13) {
                this.login();
            }
        }
    }
}