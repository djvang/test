import React, { Component } from 'react';

class LanguagesSwitcher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }
    openLangList = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }));
    };
    render() {
        let isOpen = this.state.open ? 'active' : 'close';
        return(
            <div className="lang">
                <span onClick={this.openLangList}>
                    <img src={require("../../../assets/images/lang_en.png")} alt="current language english"/>
                </span>
                <div className={`lang__list ${isOpen}`}>
                    <a href="#" className="lang__list-item">
                        <img src={require("../../../assets/images/lang_fr.png")} alt="language french"/>
                    </a>
                    <a href="#" className="lang__list-item">
                        <img src={require("../../../assets/images/lang_ru.png")} alt="language russian"/>
                    </a>
                </div>
            </div>
        )
    }
}

export default LanguagesSwitcher;
