import React, {Component} from 'react';
import JoinUs from "./join-us";
import Payment from "./payment";
import Providers from "./providers";
import Copyright from "./copyright";

class Footer extends Component {
    render() {
        return (
            <footer>
                <JoinUs />
                <Payment />
                <Providers />
                <Copyright />
            </footer>
        )
    }
}

export default Footer;
