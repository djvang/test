import React, { Component } from 'react';
import { BackTop } from 'antd';
import Header from '../components/header/index';
import Main from '../components/main/main-page/index';
import Footer from '../components/footer/footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleBonus: false,
        }
    }
    showDrawer = () => {
        this.setState({
            visibleBonus: true,
        });
    };
    onClose = () => {
        this.setState({
            visibleBonus: false,
        });
    };

    render() {
        return (
            <div className="wrapper">
                <BackTop />
                <Header
                    showDrawer={this.showDrawer}
                    visible = {this.state.visibleBonus}
                    onClose = {this.onClose}
                />
                <Main />
                <Footer />
            </div>
        )
    }
}

export default App;
