import React, { Component } from 'react';
import { Drawer, Row } from 'antd';
import CloseButton from './close-btn';
import Bonus from "./bonus-item";

class BonusTab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bonuses: [
                {
                    id: 1,
                    bonus: require('../../../assets/images/promo-square-en.jpg')
                },
                {
                    id: 2,
                    bonus: require('../../../assets/images/promo-square-en_halloween.jpg')
                },
                {
                    id: 3,
                    bonus: require('../../../assets/images/promo-square-fr_halloween.jpg')
                },
                {
                    id: 4,
                    bonus: require('../../../assets/images/promo-square-ru.jpg')
                },
                {
                    id: 5,
                    bonus: require('../../../assets/images/promo-square-ru_halloween.jpg')
                }
            ]
        }
    }
    render() {
        return(
            <div className="bonus-tab">
                <div className="container">
                    <CloseButton/>
                    <Row className="bonus-tab__list" type="flex" justify="space-around" gutter={[20 , 0]}>
                        {this.state.bonuses.map((element, index) => {
                            return <Bonus
                                key={index}
                                bonus={element.bonus}
                            />
                        })}
                    </Row>
                </div>
            </div>
        )
    }
}

export default BonusTab;
