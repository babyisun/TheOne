import React from 'react';
import {Link, Redirect, Route} from 'react-router-dom';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h3>一张报表，从心开始</h3>
            </div>
        );
    }
}