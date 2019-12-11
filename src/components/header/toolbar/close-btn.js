import React, { Component } from 'react';
import { Row } from 'antd';

class CloseButton extends Component {
    render() {
        return(
            <Row className="close-btn" type="flex" justify="end">
                <a href="#" className="close-btn-link">
                    <span>Close</span>
                </a>
            </Row>
        )
    }
}

export default CloseButton;
