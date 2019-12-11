import React, { Component } from 'react';
import { Col } from 'antd';

class Bonus extends Component {
    render() {
        return(
            <Col>
                <img className="bonus-tab__list-item" src={this.props.bonus} alt="bonus"/>
            </Col>
        )
    }
}

export default Bonus;
