import React, { Component } from 'react';
import { Row, Col } from 'antd';
import HeaderLogo from './logo';
import HeaderToolbar from './toolbar/index';
import BonusTab from "./toolbar/bonus-tab";

class Header extends Component {
    render() {
        return(
            <header>
                <div className="container">
                    <Row type="flex" justify="space-between">
                        <HeaderLogo />
                        <Col span={24}>
                            <HeaderToolbar showDrawer={this.props.showDrawer}/>
                        </Col>
                    </Row>

                </div>
                <BonusTab
                    visible={this.props.visible}
                    onClose={this.props.onClose}
                />
            </header>
        )
    }
}

export default Header;
