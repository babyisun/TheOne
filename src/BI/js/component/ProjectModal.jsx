import React from "react";
import {Button} from 'react-bootstrap';
import { AJAX } from '../core/b';
import { CODE } from '../core/AJAX';
import Modals from '../plugin/Modals.jsx';


export default class ProjectModal extends React.Component {
    constructor(props) {
        super(props);
    }

    onSubmit() {
        let _this = this, form = $(".project_form"),json=AJAX.toJson(form.serializeArray());
        json.uid=$.cookie.get("uid");
        console.log(json);
        AJAX.post('addproject', json, (data) => {
            console.log(data);
            if (data.code == CODE.SUCCESS) {
                
            } else if (data.code == CODE.ERROR) {
               
            }
        });
    }

    render() {
        return (
            <Modals title="创建项目" show={true} onSubmit={this.onSubmit.bind(this)}>
                <div className="form_container">
                    <form className="form-horizontal project_form">
                        <div className="form-group">
                            <label className="col-sm-3 col-xs-3 control-label">项目名称：</label>
                            <div className="col-sm-9 col-xs-9">
                                <input
                                    type="text"
                                    maxLength="20"
                                    placeholder="20个字以内"
                                    className="form-control"
                                    name="name"
                                    />
                            </div>
                        </div>
                    </form>
                </div>
            </Modals>
        );
    }
}