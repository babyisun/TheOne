import React from 'react';
import * as BS from 'react-bootstrap';

export default class Modals extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: props.show
        }
    }

    static defaultProps = {
        show: false,
        headerShow: true,
        btnName: "确定",
        onSubmit: null
    }

    onClose() {
        //this.setState({show: false});
        if (this.props.onClose) {
            this
                .props
                .onClose();
        }
    }

    render() {
        const {
            children,
            title,
            headerShow,
            dialogClassName,
            btnName,
            onSubmit,
            ...props
        } = this.props;

        return (
            <BS.Modal
                show={this.state.show}
                onHide={this
                .onClose
                .bind(this)}
                aria-labelledby="contained-modal-title"
                dialogClassName={dialogClassName}>
                {headerShow
                    ? (
                        <BS.Modal.Header closeButton>
                            <BS.Modal.Title>{title}</BS.Modal.Title>
                        </BS.Modal.Header>
                    )
                    : ""}
                <BS.Modal.Body>
                    {children}
                </BS.Modal.Body>
                <BS.Modal.Footer>
                    {/* <BS.Button>取消</BS.Button> */}
                    <BS.Button bsStyle="primary" onClick={onSubmit.bind(this)}>{btnName}</BS.Button>
                </BS.Modal.Footer>
            </BS.Modal>
        )
    }

    componentWillReceiveProps(props) {
        this.setState({show: props.show});
    }
}