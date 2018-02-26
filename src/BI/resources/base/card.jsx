import React from 'react';

export default class Card extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div>
                这是一个区块1
            </div>
        )
    }
}