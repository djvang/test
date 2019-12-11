import React, { Component } from 'react';

class Registration extends Component {
    changeForm = e => {
        e.preventDefault();
        this.props.showForm('login')
    };
    render() {
        return(
            <div className="form-item registration">
                <form method="post" id="">
                    <input
                        className="user-name"
                        type="text"
                        placeholder="Email"
                    />
                    <input
                        className="password"
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        className="confirm-password"
                        type="password"
                        placeholder="Confirm your password"
                    />
                    <button className="btn" type="submit">Register now</button>
                    <div className="form-item-link">
                        <a href="#" className="login-link" onClick={this.changeForm}>Login into existing account</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Registration;
