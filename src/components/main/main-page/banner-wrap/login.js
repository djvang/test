import React, { Component } from 'react';

class Login extends Component {
    changeForm = e => {
        e.preventDefault();
        this.props.showForm('registration')
    };
    render() {
        return(
            <div className="form-item login">
                <form method="post" id="">
                    <input
                        className="user-name"
                        type="text"
                        placeholder="Username or Email "
                    />
                    <input
                        className="password"
                        type="password"
                        placeholder="Password"
                    />
                    <button className="btn" type="submit">Login</button>
                    <div className="form-item-link">
                        <a href="#" className="register" onClick={this.changeForm}>Create a new account</a>
                        <a href="#" className="pass_lost">Forgot password?</a>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;
