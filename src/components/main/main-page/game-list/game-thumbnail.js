import React, { Component } from 'react';
import Background from "../../../../assets/images/default_background.png";

class GameBlock extends Component {
    render() {
        return(
            <div className="game-cell">
                <div className="hover-holder" />
                <div className="game-block" style={{backgroundImage: `url(${Background})`}}>
                    <img src={require("../../../../assets/images/default_background_blur.png")} alt=""
                         className="download-test"/>
                    <div className="personal-entry">
                        <img src={require("../../../../assets/images/default_game.png")} alt=""/>
                    </div>
                    <div className="logo-entry">
                        <img src={require("../../../../assets/images/default_logo.png")} alt=""/>
                    </div>
                    <div className="lets-play-block">
                        <p className="top">
                            game name
                        </p>
                        <a className="play-btn" href="#">
                            <img src={require("../../../../assets/images/arrow-btn.svg")} alt="arrow btn"/>
                            Play now
                        </a>
                        <p className="bottom">
                            <a href="#">
                                <img src={require("../../../../assets/images/amatic.png")} alt="game provider"/>
                            </a>
                        </p>
                    </div>
                </div>
                <div className="hover-holder2" />
            </div>
        )
    }
}

export default GameBlock;
