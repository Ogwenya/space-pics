import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as LoadingSvg } from './loading.svg';

class MarsRover extends Component {
    state = {
        pictures: []
    }
    componentDidMount(){
        let API_KEY = ''  //use your api key
        axios.get(API_KEY)
            .then((res) => {
                    this.setState({
                        pictures: res.data.photos.slice(0, 200)
                    })
            })
            .then(res => console.log(this.state.pictures))
    }
    render() {
        const pics = this.state.pictures;
        const pic =  pics.length ? (
            pics.map((picture) => {
                return(
                    <div className="center" id="img-container" key={picture.id}>
                    <figure>
                        <img id="img" src={picture.img_src} loading="lazy" alt="" />
                        <figcaption>
                            <p className="center">{picture.camera.full_name}</p>
                        </figcaption>
                    </figure>
                </div>
                )
            })
        ) : (
            <LoadingSvg />
        )
    
        return (
            <div>
                <h5 className="center" id="title">Bringing you a collection of photos of mars from the curiosity rover</h5>
                {pic}
            </div>
        )
    }
}

export default MarsRover
