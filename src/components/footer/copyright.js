import React, { Component } from 'react';

class Copyright extends Component {
    render() {
        return(
            <section className="copyright">
                <div className="container">
                    <div className="row copyright_block">
                        <ul className="copyright_list">
                            <li className="copyright_list-item">
                                <a href="#">PAYMENTS</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">ABOUT US</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">PROMOTIONS</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">FAQ</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">ACCOUNT VERIFICATION</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">RESPONSIBLE GAMING</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">PERSONAL DATA USAGE & PROTECTION POLICY</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">TERMS AND CONDITIONS</a>
                            </li>
                            <li className="copyright_list-item">
                                <a href="#">AFFILIATES</a>
                            </li>
                        </ul>
                        <div className="copyright_info">
                            <p>
                                The operator of the website is Silver Star Entertainment Europe Limited, Maltese company with
                                registration number C85404 having its registered address at Office 1, Birds of Paradise, Triq
                                il-Hagar, Mosta, MST 2551, Malta, using the license of its holding company, The Luck Factory B.V.
                                (Curacao eGaming License (#1668/JAZ) issued on the 9th of March 2018).
                                <br />Copyright 2019 www.dev.winoui.com:90 - All rights reserved<br />
                                If you wish to unsubscribe from further marketing communications, please contact Winoui
                                Casino at <a href="#">help@winoui.com</a>
                            </p>
                        </div>
                        <div className="copyright_logo">
                            <img src={require('../../assets/images/18plus.png')} alt="" className="copyright_logo-item"/>
                            <img src={require('../../assets/images/footer-logos.png')} alt="" className="copyright_logo-item"/>
                            <img src={require('../../assets/images/18plus.png')} alt="" className="copyright_logo-item"/>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Copyright;
