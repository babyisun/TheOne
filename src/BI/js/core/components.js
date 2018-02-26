import React from 'react';
import Card from "../../resources/base/card.jsx";

export default class Components {
    // constructor(props) {
    //     super(props);
    // }

    static getComponent(name,options) {
        return <Card {...options} />;
    }
}
