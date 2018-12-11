// kriti
import React, { Component } from "react";
import "../style.css";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';

// eslint-disable-next-line
class ImageGrid extends Component {

    // constructor(props) {
    //     super(props);
    //     console.log("this.props.allImages in constructor ==> ", this.props.allImages);
    //     for(var x in this.props.allImages) {
    //         console.log("X ==> ", x);
    //         for(var y in this.props.allImages[x]) {
    //             console.log("Y ==> ", this.props.allImages[x][y].img_src);
    //             this.props.allImages[x][y].img_src = require(`${this.props.allImages[x][y].img_src}`);
    //             console.log("Y UPDATED ==> ", this.props.allImages[x][y].img_src);
    //         }
    //     }
    // }
    createListItems() {
        console.log("this.props.allImages ==> ", this.props.allImages);
        // const {id} = this.props.match.params
        // console.log("CATEGORY ==> ", id)
        // const {category} = props.location.state;
        // console.log("props.location.state.category ==> ", category);
        return this.props.allImages['Staff picks'].map((cImage) => {
            console.log("cimage ==> ", cImage);
            return (
                <div key={cImage.id} className="col">

                    <div className="card categories-image-card">
                        <img className="card-img-top" height="300px" width="300px" src={cImage.img_src} alt=""></img>
                    </div>

                </div>
            );
        });
    }

    render() {
        return (
            <div>
                <h1>Image Grid</h1>

                    <div className="container">

                    <div className="row">
                        { this.createListItems() }
                    </div>

                </div> 
             </div> 
        ); 
    }
}

function mapStateToProps(state) {
    console.log("State ==> ", state);
    return {
        allImages: state.allImages
    }
}

export default connect(mapStateToProps)(ImageGrid);
