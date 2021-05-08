import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <h2 className="center"><a href="/">SPACE PICTURES</a></h2>
                <nav id="nav-bar" className=" nav-wrapper red darken-3">
                    <ul className="right">
                        <li><Link to="/">PICTURE OF THE DAY</Link></li>
                        <li><NavLink to="/curiosity-photos">MARS PHOTOS</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(Header)
