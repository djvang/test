import React, { Component } from 'react';
import FormTab from './form';
import { Row, Col } from 'antd';

class BannerWrap extends Component {
    render() {
        return(
            <div className="banner-wrap">
                <div className="container">
                    <Row className="height-100" type="flex" justify="space-between" align="middle">
                        <Col span={16}>
                            <div className="banner">
                                <a href="#">
                                    <img src=""/>
                                </a>
                            </div>
                        </Col>
                        <FormTab />
                    </Row>
                </div>
            </div>
        )
    }
}

export default BannerWrap;
