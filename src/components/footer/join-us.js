import React, { Component } from 'react';

class JoinUs extends Component {
    render() {
        return(
            <section className="join-us">
                <div className="container">
                    <div className="row">
                        <div className="join-us-item step-1">
                            <img src={require('../../assets/images/question.png')} alt="question"/>
                            <p className="text">
                                <b>Why to Join</b> Winoui Casino ?
                            </p>
                        </div>
                        <div className="join-us-item step-2">
                            <img src={require('../../assets/images/1_icon.svg')} alt="best game"/>
                            <p className="text">
                                THE <b>BEST GAME</b> SELECTION
                            </p>
                        </div>
                        <div className="join-us-item step-3">
                            <img src={require('../../assets/images/2_icon.svg')} alt="extra bonuses every month"/>
                            <p className="text">
                                EXTRA BONUSES <b>EVERY MONTH</b>
                            </p>
                        </div>
                        <div className="join-us-item step-4">
                            <img src={require('../../assets/images/3_icon.svg')} alt="support"/>
                            <p className="text">
                                <b>PROFESSIONAL</b> AND <b>PERSONAL</b> PLAYER SUPPORT
                            </p>
                        </div>
                        <div className="join-us-item step-5">
                            <a href="#" className="btn join-us-item-btn">join us now</a>
                            <p className="text">
                                AND GET 200€ ON YOUR FIRST DEPOSIT
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default JoinUs;
