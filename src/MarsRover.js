import React, { Component } from 'react';
import axios from 'axios';
import { ReactComponent as LoadingSvg } from './loading.svg';

class MarsRover extends Component {
    state = {
        pictures: []
    }
    componentDidMount(){
        axios.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=VHyEHQdHVsM7DSm446QvcVInCbGphBJnYCbveK9S')
            .then((res) => {
                    this.setState({
                        pictures: res.data.photos.slice(0, 10)
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
                        <img id="img" src={picture.img_src} alt="" />
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
                <h4 className="center" id="title">Bringing you a collection of photos of mars from the curiosity rover</h4>
                {pic}
            </div>
        )
    }
}

export default MarsRover
