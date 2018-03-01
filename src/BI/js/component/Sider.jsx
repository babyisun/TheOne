import React from "react";
import { Link, Route, NavLink } from 'react-router-dom';
import "../plugin/scrollbar";
import "../plugin/jquery.contextmenu";
import "../../css/plugin/jquery.contextmenu.css";

import ProjectModal from './ProjectModal.jsx'
import { modalStore } from "../store/ModalStore";
import { AJAX } from '../core/b';
import { CODE } from '../core/AJAX';

export default class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    Name: "首页",
                    class: "btn-hide",
                    ProjectID: "/"
                },
                {
                    Name: "财务报表",
                    ProjectID: "/pad",
                    pages: [
                        { Name: "收入", ProjectID: "/auto-complete" },
                        { Name: "支出", ProjectID: "/free-check-box" },
                    ]
                },
                {
                    Name: "运营报表",
                    ProjectID: "/date",
                    pages: [
                        { Name: "登录情况", ProjectID: "/date-range-picker", icon: "pc" },
                        { Name: "统计分析", ProjectID: "/date-chooser", icon: "pc" },
                    ]
                },
                {
                    Name: "行政报表",
                    ProjectID: "/list",
                    pages: [
                        { Name: "考勤", ProjectID: "/table", icon: "pc" }
                    ]
                },
                {
                    Name: "其它",
                    ProjectID: "/others",
                    pages: [
                        { Name: "行为分析", ProjectID: "/audio-play" },
                        { Name: "行业洞察", ProjectID: "/iframe-load" }
                    ]
                },
            ]
        }

        // this.state = {
        //     menu: []
        // }
    }

    contextPopup() {
        $('.btn-project').contextPopup({
            title: '项目',
            items: [
                { label: '预览', iconClass: "icon-preview", action: () => { alert('clicked 1') } },
                {
                    label: '发布', iconClass: "icon-publish", action: (e) => {
                        let uid = $.cookie.get("uid"), pid = e.target.getAttribute("data");
                        AJAX.post("rproject", { uid: uid, projectId: pid }, data => {
                            console.log('成功发布')
                        })
                    }
                },
                null,
                { label: '添加页面', iconClass: "icon-add", action: (e) => { console.log(e.target.getAttribute("data")) } },
                { label: '删除项目', iconClass: 'icon-delete', action: () => { alert('clicked 5') } },
                { label: '重命名', iconClass: 'icon-rename', action: () => { alert('clicked 6') } }
            ]
        });
        $('.btn-page').contextPopup({
            title: '页面',
            items: [
                { label: '预览', iconClass: "icon-preview", action: () => { alert('clicked 1') } },
                { label: '隐藏', iconClass: 'icon-invisable', action: () => { alert('clicked 1') } },
                null,
                { label: '删除', iconClass: 'icon-delete', action: () => { alert('clicked 5') } },
                { label: '重命名', iconClass: 'icon-rename', action: () => { alert('clicked 6') } }
            ]
        });
    }

    componentWillMount() {
        let _this = this;
        AJAX.post("getproject", { uid: 1 }, data => {
            if (data.code == CODE.SUCCESS) {
            _this.setState({ menu: data.data },()=>_this.contextPopup());
            }
        });
    }

    render() {
        return (
            <div className="sider">
                {
                    this.state.menu.map((item, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={'/' + item.ProjectID}
                                    data={item.ProjectID}
                                    className={`btn-project primary ${item.pages && item.pages.length ? 'btn-toggle' : ''} ${item.class ? item.class : ''}`}
                                    activeClassName="active"
                                >{item.Name}</NavLink>
                                <div className={`toggle-list`}>
                                    {
                                        item.pages && item.pages.map((r, j) => {
                                            return (
                                                <NavLink data={r.PageID} className="btn-page" key={j} to={'/' + item.ProjectID + '/' + r.PageID} activeClassName="active">
                                                    {r.icon ? <i className={`re-site-icon re-site-icon-${r.icon}`}></i> : ''}
                                                    {r.Name}
                                                </NavLink>);
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
                <ProjectModal />
            </div>
        );
    }

    componentDidMount() {
        let $sider = $('.sider');
        $sider.scrollbar();
        $sider.contextPopup({
            items: [
                { label: '创建项目', iconClass: "icon-add", action: () => { modalStore.setProjectModal_Show(true); } },
            ]
        });
        this.contextPopup();
    }
}