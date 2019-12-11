import React, { Component } from 'react';
import { Row, Col } from 'antd';

class FilterPanel extends Component {
    render() {
        return(
            <div className="filter-wrapper">
                <div className="container-fluid">
                    <Row type="flex" justify="space-between" className="filter-item">
                        <Col className="games-nav">
                            <a href="#" className="games-nav-item active">all games</a>
                            <a href="#" className="games-nav-item">most played</a>
                            <a href="#" className="games-nav-item">recent</a>
                            <a href="#" className="games-nav-item mas">
                                <span className="item"></span>
                                <p className="title"></p>
                            </a>
                            <a href="#" className="games-nav-item roulette">
                                <span className="item"></span>
                                <p className="title"></p>
                            </a>
                            <a href="#" className="games-nav-item blackjack">
                                <span className="item"></span>
                                <p className="title"></p>
                            </a>
                        </Col>
                        <Col className="filter-nav">
                            <Row type="flex">
                                <div>
                                    <input type="text" className="search"/>
                                </div>
                                <div className="filter-by-software">
                                    <select className="select" defaultValue={"All software"}>
                                        <option>All software</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>
                                <div className="filter-by-category">
                                    <select className="select" defaultValue={"All category"}>
                                        <option>All category</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                    </select>
                                </div>
                                <div className="sort-by">
                                    <ul>
                                        <li className="sort-by-popularity">
                                            <a href="#">
                                                Sort by popularity
                                            </a>
                                        </li>
                                        <li className="sort-by-name">
                                            <a href="#">
                                                Sort by name
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default FilterPanel;
