import React, { Component } from 'react';
import PromotionLink from "./promotions";
import BonusHeader from "./bonus";
import LanguagesSwitcher from "./lang";
import { Row, Col } from 'antd';

class HeaderToolbar extends Component {
    render() {
        return(
            <Row className="toolbar" type="flex" justify="end" align="middle" gutter={[20 , 0]}>
                <Col>
                    <PromotionLink/>
                </Col>
                <Col>
                    <BonusHeader showDrawer={this.props.showDrawer}/>
                </Col>
                <Col>
                    <LanguagesSwitcher/>
                </Col>
            </Row>
        )
    }
}

export default HeaderToolbar;
