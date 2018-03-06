import React from 'react';
import Pie from "./pie/Pie.jsx";

export default class Demo extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="Demo">
                <Pie/>
            </div>
        )
    }
}