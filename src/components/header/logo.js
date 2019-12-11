import React, { Component } from 'react';

class HeaderLogo extends Component {
    render() {
        return(
            <a className='logo' href="#">
                <img src={require("../../assets/images/logo_animated.png")} alt="winoui logo"/>
            </a>
        )
    }
}

export default HeaderLogo;
