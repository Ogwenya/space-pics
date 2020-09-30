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
        axios.get('https://api.nasa.gov/planetary/apod?api_key=wwBojpG0RgiLelsd8JqkaOhu3SVuQHruB21BOMfb')
            .then((res) => {
                this.setState({
                    pictureSrc: res.data.url,
                    picExplanation: res.data.explanation,
                    title: res.data.title
                })
            })
    }
    render() {
        console.log(this.state.pictureSrc);
        let ifPic = this.state.pictureSrc.slice(-3);
        let pic = 'png' || 'PNG' || 'jpg' || 'JPG'
        console.log(ifPic);
        if(ifPic == pic){
            return (
            <div className="container">
                <h4 id="main-title" className="center">NASA PICTURE OF THE DAY</h4>
                <h5 className="center">{this.state.title}</h5>
                <div id="output" className="center">{this.state.picExplanation}</div>
                <div id="picture" className="center">
                    <img id="img" src={this.state.pictureSrc} alt="" />
                </div>
            </div>
        )
        }else{
            return (
                <div className="container">
                    <h4 id="main-title" className="center">NASA PICTURE OF THE DAY</h4>
                    <h5 className="center">{this.state.title}</h5>
                    <div id="output" className="center">{this.state.picExplanation}</div>
                    <div id="picture" className="center">
                        <iframe className="img-1" src={this.state.pictureSrc} frameBorder="0" allow="autoplay; encrypted-media" title={this.state.title} allowfullscreen></iframe>
                    </div>
                </div>
            )
        }
    }
}

export default POTD
