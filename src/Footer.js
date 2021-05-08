import React, { Component } from 'react'

class Footer extends Component {
    render() {
        let date = new Date()
        let year = date.getFullYear()
        return (
            <div>
                <footer className="center">
                    <h6>Ogwenya &copy; <span id="year">{year}</span></h6>
                </footer>
            </div>
        )
    }
}

export default Footer