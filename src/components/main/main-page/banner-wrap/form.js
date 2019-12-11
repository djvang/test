import React, { Component } from 'react';
import Login from './login';
import Registration from './registration'

class FormTab extends Component {
    state = {
        form: 'login'
    };

    changeForm = form => {
        this.setState({
           form
        })
    };

    render() {
        return(
            <div className="form">
                <div className="form-heading">
                    <div className="form-heading-item">
                        <img className="step-1" src={require('../../../../assets/images/step1.png')} alt="step 1"/>
                        <h2>Register</h2>
                    </div>
                    <div className="form-heading-item">
                        <img className="step-2" src={require('../../../../assets/images/step2.png')} alt="step 2"/>
                        <h2>Deposit</h2>
                    </div>
                    <div className="form-heading-item">
                        <img className="step-3" src={require('../../../../assets/images/step3.png')} alt="step 3"/>
                        <h2>get bonus</h2>
                    </div>
                </div>
                {
                    this.state.form === 'login' ? (
                        <Login showForm={this.changeForm}/>
                    )  : <Registration showForm={this.changeForm}/>
                }
            </div>
        )
    }
}

export default FormTab;
