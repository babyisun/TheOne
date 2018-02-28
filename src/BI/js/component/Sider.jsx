import React from "react";
import {Link, Route,NavLink} from 'react-router-dom';
import "../plugin/scrollbar";
import "../plugin/jquery.contextmenu";
import "../../css/plugin/jquery.contextmenu.css";

import ProjectModal from './ProjectModal.jsx'
import {modalStore} from "../store/ModalStore";

export default class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.menu = [
            {
                name: "首页",
                class: "btn-hide",
                url: "/"
            },
            {
                name: "财务报表",
                url: "/pad",
                son: [
                    {name: "收入", url: "/auto-complete"},
                    {name: "支出", url: "/free-check-box"},
                ]
            },
            {
                name: "运营报表",
                url: "/date",
                son: [
                    {name: "登录情况", url: "/date-range-picker", icon: "pc"},
                    {name: "统计分析", url: "/date-chooser", icon: "pc"},
                ]
            },
            {
                name: "行政报表",
                url: "/list",
                son: [
                    {name: "考勤", url: "/table", icon: "pc"}
                ]
            },
            {
                name: "其它",
                url: "/others",
                son: [
                    {name: "行为分析", url: "/audio-play"},
                    {name: "行业洞察", url: "/iframe-load"}
                ]
            },
        ];
    }

    render() {
        return (
            <div className="sider">
                {
                    this.menu.map((item, i) => {
                        return (
                            <div key={i}>
                                <NavLink to={item.url}
                                      className={`btn-project primary ${item.son ? 'btn-toggle' : ''} ${item.class ? item.class : ''}`}
                                      activeClassName="active"
                                >{item.name}</NavLink>
                                <div className={`toggle-list`}>
                                    {
                                        item.son && item.son.map((r, j)=> {
                                            return (
                                                <NavLink className="btn-page" key={j} to={item.url+r.url} activeClassName="active">
                                                    {r.name}
                                                    {r.icon ? <i className={`re-site-icon re-site-icon-${r.icon}`}></i> : ''}
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
        let $sider=$('.sider');
        $sider.scrollbar();
        $sider.contextPopup({
            items: [
              {label:'创建项目',iconClass :"icon-add",action:()=>{ modalStore.setProjectModal_Show(true); } },
            ]
        });
        $('.btn-project').contextPopup({
             title: '项目',
             items: [
                {label:'预览',iconClass :"icon-preview",action:()=>{ alert('clicked 1') } },
                {label:'发布',iconClass :"icon-publish",action:()=>{ alert('clicked 1') } },
                null,
                {label:'添加页面',iconClass :"icon-add",action:()=> { alert('clicked 4') } },
                {label:'删除项目',iconClass:'icon-delete',action:()=> { alert('clicked 5') } },
                {label:'重命名',iconClass:'icon-rename', action:()=> { alert('clicked 6') } }
              ]
        });
        $('.btn-page').contextPopup({
            title: '页面',
            items: [
              {label:'预览',action:()=> { alert('clicked 1') } },
              {label:'隐藏',icon:'icons/shopping-basket.png',action:()=> { alert('clicked 1') } },
              null,
              {label:'删除',icon:'icons/bin-metal.png',action:()=> { alert('clicked 5') } },
              {label:'重命名',icon:'icons/magnifier-zoom-actual-equal.png', action:()=> { alert('clicked 6') } }
            ]
        });
    }
}