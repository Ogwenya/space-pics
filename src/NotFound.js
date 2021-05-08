import React, { Component } from 'react';
import Error from './404.png';

class NotFound extends Component {
    render() {
        return (
            <div className="container" id="error-container">
                <img className="center" src={Error} alt="" />
                <a class="waves-effect waves-light btn-large" href="/">Back home</a>
            </div>
        )
    }
}

export default NotFound
