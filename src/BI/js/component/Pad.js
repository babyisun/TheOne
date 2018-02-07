import React from 'react';
export default class Pad extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div className="container-fluid pad">
                <div className="row">
                    <div className="col-md-12">
                        <div className="grid-stack grid-stack-12" id="grid2">这这这</div>
                    </div>
                </div>
            </div>
        )
    }
}