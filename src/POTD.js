import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as LoadingSvg } from './loading.svg';

class POTD extends Component {
    state = {
        title: '',
        pictureSrc: '',
        picExplanation: ''
    }

    componentDidMount(){
        let API_KEY = ''  //use your api key
        axios.get(API_KEY)
            .then((res) => {
                this.setState({
                    pictureSrc: res.data.url,
                    picExplanation: res.data.explanation,
                    title: res.data.title
                })
            })
    }
    render() {

        if(this.state.picExplanation !== ''){
            return (
            <div className="container">
                <h4 id="main-title" className="center">NASA PICTURE OF THE DAY</h4>
                <h5 className="center">{this.state.title}</h5>
                <div id="output" className="center">{this.state.picExplanation}</div>
                <div id="picture" className="center">
                    <img className="img-1" src={this.state.pictureSrc} alt="" />
                </div>
            </div>
        )
        }else{
            return(
                <div className="container">
                    <h3 id="main-title" className="center">NASA PICTURE OF THE DAY</h3>
                    <LoadingSvg />
                </div>
            )
        }
    }
}

export default POTD
