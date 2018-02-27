import React from 'react';
import {BASE_STATIC} from "../core/base";

export default class Empty extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div className="vendor_empty">
                <img src={BASE_STATIC+"images/vendor_empty.png"} alt=""/>
                <div className="tip">没有权限</div>
            </div>
        )
    }
}