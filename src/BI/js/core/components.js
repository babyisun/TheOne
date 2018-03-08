import React from 'react';
import Card from "../../resources/base/Card.jsx";

export const COMPONENTS = {
    DATE: "date",
    CARD: "card",
    LINE: "line"
}

export class Components {
    // constructor(props) {     super(props); }

    static getComponent(name, options) {
        switch (name) {
            case 'Card':
                return <Card {...options}/>;
            case 'Line':
                return <div>line</div>;
            default:
                return <div>null</div>
        }
    }
}
