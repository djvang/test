import React, { Component } from 'react';

class Payment extends Component {
    render() {
        return(
            <section className="payment">
                <div className="container">
                    <div className="row payment_block">
                        <h4>
                            PAYMENTS METHODS
                        </h4>
                        <p>
                            We provide top trustworthy and convenient deposit and withdrawal options, to guarantee
                            our players
                            have no issues with handling the transactions to and from Winoui Casino. Please keep in
                            mind that
                            the list of available payment methods may differ, depending on your country. So we
                            advise to log
                            in to your casino account, click on the Deposit button and check the list of methods
                            legit for your
                            country.
                        </p>
                        <a className="link" href="#">
                            <img className="payment_img" src={require('../../assets/images/CreditCard.png')}
                                 alt="Bank card"/>
                            <img className="payment_img" src={require('../../assets/images/Cashlib.png')}
                                 alt="Cashlib"/>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Payment;
