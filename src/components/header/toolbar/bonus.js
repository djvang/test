import React, { Component } from 'react';

class BonusHeader extends Component {
    render() {
        return(
            <a className="toolbar__item" onClick={this.props.showDrawer}>
                bonus
            </a>
        )
    }
}

export default BonusHeader;
